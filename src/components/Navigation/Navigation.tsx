import React from 'react';

import { NavLink } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import {
  StyledNav,
  NavList,
  StyledNavLink,
  NavListMobile,
  MenuHamburgerIcon,
  HamburgerButton
} from './styled';

export const Nav = () => (
  <StyledNav>
    <NavList>
      {[
        <StyledNavLink to="/">Home</StyledNavLink>,
        <StyledNavLink to="/demo">Demo</StyledNavLink>,
        <StyledNavLink to="/o-nas">O nas</StyledNavLink>,
        <NavLink to="/">
          <img height={90} width={268} src="sat7.gif" />
        </NavLink>,
        <StyledNavLink to="/repertuar">Repertuar</StyledNavLink>,
        <StyledNavLink to="/galeria">Galeria</StyledNavLink>,
        <StyledNavLink to="/kontakt">Kontakt</StyledNavLink>
      ].map((link) => (
        <li key={nanoid()}>{link}</li>
      ))}
    </NavList>
    <NavListMobile>
      <li>
        <NavLink to="/">
          <img height={60} width={178} src="sat7.gif" />
        </NavLink>
      </li>
      <li>
        <HamburgerButton aria-label="menu" onClick={() => {}}>
          <MenuHamburgerIcon />
        </HamburgerButton>
      </li>
    </NavListMobile>
  </StyledNav>
);
