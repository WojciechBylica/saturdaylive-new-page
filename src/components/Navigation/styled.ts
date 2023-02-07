import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ReactComponent as HamburgerMenu } from './images/menu-down.svg';

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.navColor};
  text-decoration: none;
  margin: 30px 8px;
  padding: 38px 10px;
  user-select: none;
  transition: color 0.3s linear;

  &.active {
    color: ${({ theme }) => theme.color.navColorHover};
    border-bottom: 2px solid ${({ theme }) => theme.color.navColorHover};
  }

  &:hover {
    color: ${({ theme }) => theme.color.navColorHover};
  }

  &:focus-visible {
    outline: none;
  }
`;

export const NavLinkMobile = styled(StyledNavLink)`
  padding: 16px 0 4px;
`;

export const StyledNav = styled.nav`
  margin: 0 auto;
  background: ${({ theme }) => theme.color.navBackground};

  height: 102px;
  display: flex;
  align-items: center;
  transition: height 0.3s linear;

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
  transition: justify-content 0.3s linear;

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
export const HamburgerButton = styled.button<{ close?: boolean }>`
  color: white;
  border: 1px solid white;
  background: #333;
  cursor: pointer;
  user-select: none;
  border-radius: 5px;
  transition: color 0.3s linear;

  &:hover {
    color: gold;
    border: 1px solid gold;
  }

  &:focus-visible {
    outline: none;
  }

  ${({ close }) =>
    close &&
    css`
      padding: 0;
      width: 40px;
      height: 40px;
    `};
`;

export const MenuHamburgerIcon = styled(HamburgerMenu)`
  height: 40px;
  width: 40px;
`;

export const ScreenBlockingWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.navAsideBackground};
`;
