import { Link } from 'gatsby';
import _ from 'lodash';
import { lighten } from 'polished';
import React, { useMemo } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { FieldType } from './Field';
import { colors } from '../styles/colors';
import { PostFeed } from '../styles/shared';
import { RiArrowRightSLine } from 'react-icons/ri';

interface FieldProps{
  fields: FieldType[];
}

export const Container = styled.div`
  display: flex;
  padding: 0 4rem;
  margin: 4rem 0;
`;

const Introduction: React.FC<FieldProps> = ({ fields }) => {
  const field = useMemo(
    () =>
      fields.filter(
        ({
          node: {
            frontmatter: { type },
          },
        }: FieldType) => type.includes('home'),
      ),
    [fields],
  );

  return (
    <div css={[PostFeed]}>
      <article
        className={`post-card ${field[0].node.frontmatter.image ? '' : 'no-image'} 'post-card-large'}`}
        css={[PostCardStyles, PostCardLarge]}
      >
        {field[0].node.frontmatter.image && (
          <div className="post-card-image-link" css={PostCardImageLink}>
            <PostCardImage className="post-card-image">
              {field[0].node.frontmatter?.image?.childImageSharp?.fluid && (
                <Img
                  alt={`${field[0].node.frontmatter.title} cover image`}
                  style={{ height: '100%' }}
                  fluid={field[0].node.frontmatter.image.childImageSharp.fluid}
                />
              )}
            </PostCardImage>
          </div>
        )}
        <PostCardContent className="post-card-content">
          <div className="post-card-content-link" css={PostCardContentLink}>
            <PostCardHeader className="post-card-header">
              <PostCardTitle className="post-card-title">{field[0].node.frontmatter.title}</PostCardTitle>
            </PostCardHeader>
            <PostCardExcerpt className="post-card-excerpt">
              <p>{field[0].node.frontmatter.excerpt}</p>
            </PostCardExcerpt>
          </div>
          <Link
            to="/about"
            className="post-card-button"
          >
            About<RiArrowRightSLine />
          </Link>
        </PostCardContent>
      </article>
    </div>
  );
};

export default Introduction;

const PostCardStyles = css`
  position: relative;
  flex: 1 1 301px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 20px 0 20px;
  padding: 10px 20px 10px;
  min-height: 220px;
  background-size: cover;
`;

const PostCardLarge = css`
  @media (min-width: 795px) {
    flex: 1 1 100%;
    flex-direction: row;
    padding-bottom: 40px;
    min-height: 280px;
    border-top: 0;

    :not(.no-image) .post-card-header {
      margin-top: 0;
    }

    .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      margin-bottom: 0;
      min-height: 380px;
    }

    .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card-content {
      flex: 0 1 361px;
      justify-content: center;
    }

    .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-content-link {
      padding: 0 0 0 40px;
    }

    .post-card-meta {
      padding: 0 0 0 40px;
    }

    .post-card-excerpt p {
      margin-bottom: 1.5em;
      font-size: 1.8rem;
      line-height: 1.5em;
    }

    .post-card-button {
      padding: 0 0 0 40px;
    }
  }
`;

const PostCardImageLink = css`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
`;

const PostCardImage = styled.div`
  width: auto;
  height: 200px;
  background: ${colors.lightgrey} no-repeat center center;
  background-size: cover;

  @media (prefers-color-scheme: dark) {
    background: ${colors.darkmode};
  }
`;

const PostCardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const PostCardContentLink = css`
  position: relative;
  display: block;
  /* color: var(--darkgrey); */
  color: ${colors.darkgrey};

  :hover {
    text-decoration: none;
  }
`;

const PostCardTitle = styled.h2`
  margin: 0 0 0.4em;
  line-height: 1.15em;
  transition: color 0.2s ease-in-out;

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.85);
  }
`;

const PostCardExcerpt = styled.section`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
              Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media (prefers-color-scheme: dark) {
    /* color: color(var(--midgrey) l(+10%)); */
    color: ${lighten('0.1', colors.midgrey)} !important;
  }
`;

const PostCardHeader = styled.header`
  margin: 20px 0 0;
`;
