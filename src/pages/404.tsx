import { graphql, Link } from 'gatsby';
import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import SiteNav from '../components/header/SiteNav';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import { colors } from '../styles/colors';
import { inner, outer, SiteHeader, SiteNavMain } from '../styles/shared';
import { Footer } from '../components/Footer';
import Field, { FieldType } from '../components/Field';

interface NotFoundTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: FieldType[];
    };
  };
}

const NotFoundPage: React.FC<NotFoundTemplateProps> = props => {
  const { edges } = props.data.allMarkdownRemark;

  return (
    <IndexLayout>
      <Wrapper>
        <header css={[SiteHeader, outer]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false} />
            </div>
          </div>
        </header>
        <main id="site-main" css={[outer, ErrorContent]} className="error-content">
          <div css={[inner]}>
            <section style={{ textAlign: 'center', marginBottom: '80px' }}>
              <ErrorCode>404</ErrorCode>
              <ErrorDescription>Page not found</ErrorDescription>
              <Link css={ErrorLink} to="/">
                Go to the front page →
              </Link>
            </section>
            <div>
              <Field fields={edges}/>
            </div>
          </div>
        </main>
        <Footer/>
      </Wrapper>
    </IndexLayout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { ne: null } } }
      sort: { fields: frontmatter___index, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            type
            index
            excerpt
            image {
              childImageSharp {
                fluid(
                  maxWidth: 4000
                  maxHeight: 1000
                  fit: INSIDE
                  quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const ErrorContent = css`
  padding: 12vw 4vw 6vw;

  @media (max-width: 1000px) {
    padding-top: 14vw;
  }

  @media (max-width: 800px) {
    padding-top: 18vw;
  }

  @media (max-width: 500px) {
    padding-top: 25vw;
  }

  @media (min-width: 940px) {
    .post-card {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
  }
`;

const ErrorCode = styled.h1`
  margin: 0;
  /* color: var(--lightgrey); */
  color: ${colors.lightgrey};
  font-size: 12vw;
  line-height: 1em;
  letter-spacing: -5px;
  opacity: 0.75;

  @media (max-width: 800px) {
    font-size: 11.2rem;
  }
`;

const ErrorDescription = styled.p`
  margin: 0;
  /* color: var(--midgrey); */
  color: ${colors.midgrey};
  font-size: 3rem;
  line-height: 1.3em;
  font-weight: 400;

  @media (max-width: 800px) {
    margin: 5px 0 0 0;
    font-size: 1.8rem;
  }
`;

const ErrorLink = css`
  display: inline-block;
  margin-top: 5px;
`;

export default NotFoundPage;
