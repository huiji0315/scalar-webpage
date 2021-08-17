import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

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

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
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
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h5>
                  SCALable ARchitecture Lab.
                </h5>
                <h2>
                  Introduction
                </h2>
                <p>
                  As technology advances, continuous research into security in every field is very important.
                  In our laboratory, we are focusing on hardware security and artificial intelligence, and studying various research topics based on this.
                  Our lab aims to continue to study scalable solutions.
                </p>
                <hr/>
                <h2>
                  Primary Research Topic
                </h2>
                <ol>
                  <li>Hardware Security</li>
                  <ul>
                    <li>RowHammering</li>
                    <li>description</li>
                  </ul>
                  <li>Model Pruning & Quantaization</li>
                  <ul>
                    <li>description</li>
                  </ul>
                  <li>AI Architecture for Hardware</li>
                  <ul>
                    <li>Adversial Attack</li>
                    <li>description</li>
                  </ul>
                </ol>
                <hr/>
                <h2>
                  Contact
                </h2>
                <ul>
                  <li>Tel: (02)320-3012</li>
                  <li>Email: konwoo@hongik.ac.kr</li>
                  <li>Location: (04066) 94, Wausan-ro, Mapo-gu, Seoul, Republic of Korea<br />Engineering Hall IV(Building T) T0804</li>
                </ul>
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
