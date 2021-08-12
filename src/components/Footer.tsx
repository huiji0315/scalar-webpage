import { Link } from 'gatsby';
import { setLightness } from 'polished';
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { colors } from '../styles/colors';
import { outer, inner } from '../styles/shared';
import config from '../website-config';

export const Footer: React.FC = () => {
  return (
    <footer css={[outer, SiteFooter]}>
      <div css={[inner, SiteFooterContent]}>
        <section className="copyright">
          <Link to="/">{config.title}</Link> &copy; {new Date().getFullYear()}{' '}
          {config.footer && (
            <Link to="/">
              | {config.title} {config.footer}
            </Link>
          )}
        </section>
        <section className="information">
          <SiteFooterNav>
            <a href="http://www.hongik.ac.kr/" target="_blank" rel="noopener noreferrer">
              Hongik Univ.
            </a>
            <a href="http://www.ce.hongik.ac.kr/dept/" target="_blank" rel="noopener noreferrer">
              Computer Engineering Dept.
            </a>
          </SiteFooterNav>
          <SiteFooterContact>
            {config.contact} | {config.email}
          </SiteFooterContact>
        </section>
      </div>
    </footer>
  );
};

const SiteFooter = css`
  position: relative;
  padding-top: 20px;
  padding-bottom: 50px;
  color: #fff;
  background: ${setLightness('0.0015', colors.darkgrey)};
`;

const SiteFooterContent = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  a {
    color: rgba(255, 255, 255, 0.7);
  }
  a:hover {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const SiteFooterNav = styled.nav`
  display: flex;

  a {
    position: relative;
    margin-left: 20px;
  }

  a:before {
    content: '';
    position: absolute;
    top: 11px;
    left: -11px;
    display: block;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 100%;
  }

  a:first-of-type:before {
    display: none;
  }
  @media (max-width: 650px) {
    a:first-of-type {
      margin-left: 0;
    }
  }
`;

const SiteFooterContact = styled.nav`
  display: flex;
  position: relative;
  justify-content: flex-end;

  @media (max-width: 650px) {
    justify-content: center;
  }
`;
