import React from 'react';

import { nanoid } from '@reduxjs/toolkit';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setMobileNavClose } from '../../../saturdaylive/saturdayLiveReducer';
import { HamburgerButton, NavLinkMobile } from '../styled';
import {
  StyledAside,
  AsideList,
  AsideListField,
  XIcon,
  CloseButtonWrapper
} from './styled';
import { rider } from '../../../downloadPaths';

const NavAside = () => {
  const dispatch = useAppDispatch();
  const showNavAside = useAppSelector(
    (state) => state.saturdayLive.showNavAside
  );
  return (
    <StyledAside open={showNavAside}>
      <CloseButtonWrapper>
        <HamburgerButton
          close
          onClick={() => dispatch(setMobileNavClose())}
          aria-label="Zamknij nawigację mobilną"
        >
          <XIcon />
        </HamburgerButton>
      </CloseButtonWrapper>
      <AsideList>
        {[
          <NavLinkMobile to="/" onClick={() => dispatch(setMobileNavClose())}>
            Home
          </NavLinkMobile>,

          <NavLinkMobile
            to="/demo"
            onClick={() => dispatch(setMobileNavClose())}
          >
            Demo
          </NavLinkMobile>,

          <NavLinkMobile
            to="/o-nas"
            onClick={() => dispatch(setMobileNavClose())}
          >
            O nas
          </NavLinkMobile>,

          <NavLinkMobile
            to="/repertuar"
            onClick={() => dispatch(setMobileNavClose())}
          >
            Repertuar
          </NavLinkMobile>,

          <NavLinkMobile as="a" href={rider} title="Pobierz Rider techniczny">
            Rider
          </NavLinkMobile>,

          <NavLinkMobile
            to="/kontakt"
            onClick={() => dispatch(setMobileNavClose())}
          >
            Kontakt
          </NavLinkMobile>
        ].map((link) => (
          <AsideListField key={nanoid()}>{link}</AsideListField>
        ))}
      </AsideList>

      <NavLink
        to="/"
        onClick={() => dispatch(setMobileNavClose())}
        aria-label="Home"
      >
        <img src="favicon.ico" height={60} width={60} alt="logo" />
      </NavLink>
    </StyledAside>
  );
};

export default NavAside;
