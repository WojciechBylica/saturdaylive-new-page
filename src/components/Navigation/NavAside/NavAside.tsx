import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setMobileNavClose } from '../../../saturdaylive/saturdayLiveReducer';
import { HamburgerButton, StyledNavLink } from '../styled';
import { StyledAside, AsideList, AsideListField } from './styled';

const NavAside = () => {
  const dispatch = useAppDispatch();
  const showNavAside = useAppSelector(
    (state) => state.saturdayLive.showNavAside
  );
  return (
    <StyledAside open={showNavAside}>
      <HamburgerButton
        close
        onClick={() => dispatch(setMobileNavClose())}
        aria-label="zamknij nawigację mobilną"
      >
        x
      </HamburgerButton>
      <AsideList>
        {[
          <StyledNavLink
            mobile
            to="/"
            onClick={() => dispatch(setMobileNavClose())}
          >
            Home
          </StyledNavLink>,

          <StyledNavLink
            mobile
            to="/demo"
            onClick={() => dispatch(setMobileNavClose())}
          >
            Demo
          </StyledNavLink>,

          <StyledNavLink
            mobile
            to="/o-nas"
            onClick={() => dispatch(setMobileNavClose())}
          >
            O nas
          </StyledNavLink>,

          <StyledNavLink
            mobile
            to="/repertuar"
            onClick={() => dispatch(setMobileNavClose())}
          >
            Repertuar
          </StyledNavLink>,

          <StyledNavLink
            mobile
            to="/galeria"
            onClick={() => dispatch(setMobileNavClose())}
          >
            Galeria
          </StyledNavLink>,

          <StyledNavLink
            mobile
            to="/kontakt"
            onClick={() => dispatch(setMobileNavClose())}
          >
            Kontakt
          </StyledNavLink>
        ].map((link) => (
          <AsideListField key={nanoid()}>{link}</AsideListField>
        ))}
      </AsideList>

      <NavLink to="/" onClick={() => dispatch(setMobileNavClose())}>
        <img src="favicon.ico" height={60} width={60} alt="" />
      </NavLink>
    </StyledAside>
  );
};

export default NavAside;