import { Link } from 'gatsby';
import { darken } from 'polished';
import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../styles/colors';
import { SiteNavLogo } from './SiteNavLogo';

interface SiteNavProps {
  isHome?: boolean;
  isPost?: boolean;
  post?: any;
}

class SiteNav extends React.Component<SiteNavProps> {
  render() {
    const { isHome = false, isPost = false, post = {} } = this.props;
    return (
      <nav css={SiteNavStyles}>
        <SiteNavLeft>
          {!isHome && <SiteNavLogo />}
          <SiteNavContent>
            <ul css={NavStyles} role="menu">
              <li role="menuitem">
                <Link to="/scalar-webpage" activeClassName="nav-current">Home</Link>
              </li>
              <li role="menuitem">
                <Link to="/scalar-webpage/about" activeClassName="nav-current">About</Link>
              </li>
              <li role="menuitem">
                <Link to="/scalar-webpage/members" activeClassName="nav-current">Members</Link>
              </li>
              <li role="menuitem">
                <Link to="/scalar-webpage/publications" activeClassName="nav-current">Publications</Link>
              </li>
            </ul>
          </SiteNavContent>
        </SiteNavLeft>
      </nav>
    );
  }
}

export const SiteNavMain = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  /* background: color(var(--darkgrey) l(-5%)) */
  background: ${darken('0.05', colors.darkgrey)};

  @media (max-width: 700px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const SiteNavStyles = css`
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: hidden;
  height: 64px;
  font-size: 1.4rem;
`;

const SiteNavLeft = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  margin-right: 10px;
  padding: 10px 0 80px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  white-space: nowrap;

  -ms-overflow-scrolling: touch;

  @media (max-width: 700px) {
    margin-right: 0;
    padding-left: 5vw;
  }
`;

const SiteNavContent = styled.div`
  position: relative;
  align-self: flex-start;
`;

const NavStyles = css`
  position: absolute;
  z-index: 1000;
  display: flex;
  margin: 0 0 0 -12px;
  padding: 0;
  list-style: none;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);

  li {
    display: block;
    margin: 0;
    padding: 0;
  }

  li a {
    position: relative;
    display: block;
    padding: 12px 12px;
    color: #fff;
    opacity: 0.8;
    transition: opacity 0.35s ease-in-out;
  }

  li a:hover {
    text-decoration: none;
    opacity: 1;
  }

  li a:before {
    content: '';
    position: absolute;
    right: 100%;
    bottom: 8px;
    left: 12px;
    height: 1px;
    background: #fff;
    opacity: 0.25;
    transition: all 0.35s ease-in-out;
  }

  li a:hover:before {
    right: 12px;
    opacity: 0.5;
  }

  .nav-current {
    opacity: 1;
  }
`;

export default SiteNav;
