import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';
import Profile, { ProfileType } from '../components/Profile';

export interface MemberProps {
  data: {
    allMarkdownRemark: {
      edges: ProfileType[];
    };
  };
}

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const FormerMembers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem;
  margin: 1rem 1rem 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
              Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Member: React.FC<MemberProps> = props => {
  const profilelist = props.data.allMarkdownRemark.edges;

  return (
    <IndexLayout>
      <Helmet>
        <title>Members</title>
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false} />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">Members</PostFullTitle>
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <div className="post-content">
                  <h2>
                    Professor
                  </h2>
                  <Profile profilelist={profilelist} course="professor" />
                  <hr />
                  <h2>
                    Students
                  </h2>
                  {/*
                  <h4>Ph.D.</h4>
                  <Profile profilelist={profilelist} course="Ph.D." />
                  <hr /> */}
                  <h4>Master</h4>
                  <Profile profilelist={profilelist} course="Master" />
                  <hr />
                  <h4>Undergraduate</h4>
                  <Profile profilelist={profilelist} course="undergraduate" />
                  <hr />
                  <h4>Former Members</h4>
                  <FormerMembers>
                    <li>Myeongjoon-Shin, Undergraduate (2019-2020)</li>
                    <li>Hoseok-Jung (2019-2020)</li>
                  </FormerMembers>
                </div>
              </PostFullContent>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default Member;

export const memberQuery = graphql`
  query memberQuery {
    allMarkdownRemark(
      filter: { frontmatter: { course: { ne: null } } }
      sort: { fields: frontmatter___name, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            course
            email
            field
            image {
              childImageSharp {
                fluid(
                  maxWidth: 200
                  maxHeight: 300
                  fit: INSIDE
                  quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
