import React from 'react';
import { Helmet } from 'react-helmet';
import { RiArrowRightSLine } from 'react-icons/ri';

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

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>Publications</title>
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
              <PostFullTitle className="post-full-title">Publications</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h2>
                  Journal
                </h2>
                <h4>
                  International Journal
                </h4>
                <Subtitle>
                  <div><RiArrowRightSLine /></div>
                  <h6>
                    2021
                  </h6>
                </Subtitle>
                <hr />
                <h4>
                  Domestic Journal
                </h4>
                <Subtitle>
                  <div><RiArrowRightSLine /></div>
                  <h6>
                    2021
                  </h6>
                </Subtitle>
                <p />
                <hr />
                <h2>
                  Conference
                </h2>
                <h4>
                  International Conference
                </h4>
                <Subtitle>
                  <div><RiArrowRightSLine /></div>
                  <h6>
                    2021
                  </h6>
                </Subtitle>
                <hr />
                <h4>
                  Domestic Conference
                </h4>
                <Subtitle>
                  <div><RiArrowRightSLine /></div>
                  <h6>
                    2021
                  </h6>
                </Subtitle>
                <p />
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
