import React from 'react';

import { NavLink } from 'react-router-dom';
import { StyledNavLink, NavList } from './styled';
import { nanoid } from '@reduxjs/toolkit';

const NavigationDesktop = () => (
  <NavList>
    {[
      <StyledNavLink to="/">Home</StyledNavLink>,
      <StyledNavLink to="/demo">Demo</StyledNavLink>,
      <StyledNavLink to="/o-nas">O nas</StyledNavLink>,
      <NavLink to="/" aria-label="Home">
        <img
          height={90}
          width={268}
          src="sat7.gif"
          alt="logo SaturdayLive"
          aria-label="strona główna"
        />
      </NavLink>,
      <StyledNavLink to="/repertuar">Repertuar</StyledNavLink>,
      <StyledNavLink
        as="a"
        href="SATURDAYLIVE_rider.pdf"
        title="Pobierz Rider techniczny"
      >
        Rider
      </StyledNavLink>,
      <StyledNavLink to="/kontakt">Kontakt</StyledNavLink>
    ].map((link) => (
      <li key={nanoid()}>{link}</li>
    ))}
  </NavList>
);
export default NavigationDesktop;
