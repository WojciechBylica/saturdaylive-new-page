import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const activeclassname = 'active';

import { ReactComponent as HamburgerMenu } from './menu-down.svg';

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeclassname
}))`
  color: ${({ theme }) => theme.color.navColor};
  text-decoration: none;
  margin: 30px 8px;
  padding: 38px 10px;
  user-select: none;

  &.${activeclassname} {
    color: ${({ theme }) => theme.color.navColorHover};
    border-bottom: 2px solid ${({ theme }) => theme.color.navColorHover};
  }

  &:hover {
    color: gold;
  }

  &:focus-visible {
    outline: none;
  }
`;

export const StyledNav = styled.nav`
  margin: 0 auto;
  background: ${({ theme }) => theme.color.navBackground};

  height: 102px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.lg}px) {
    height: 80px;
  }
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0.25rem 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.media.lg}px) {
    display: none;
  }
`;

export const NavListMobile = styled.ul`
  list-style-type: none;
  padding: 0.25rem 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.media.lg}px) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    justify-content: space-around;
  }

  @media (max-width: ${({ theme }) => theme.media.sm}px) {
    justify-content: space-between;
  }
`;
export const HamburgerButton = styled.button`
  color: white;
  border: 1px solid white;
  background: #333;
  cursor: pointer;
  user-select: none;
  border-radius: 5px;

  &:hover {
    color: gold;
    border: 1px solid gold;
  }

  &:focus-visible {
    outline: none;
  }
`;

export const MenuHamburgerIcon = styled(HamburgerMenu)`
  /* padding: 8px; */
  /* color: black; */
  height: 40px;
  width: 40px;
`;
