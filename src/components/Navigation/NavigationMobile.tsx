import React, { lazy, Suspense } from 'react';

import { NavLink } from 'react-router-dom';
import {
  NavListMobile,
  MenuHamburgerIcon,
  HamburgerButton,
  ScreenBlockingWrapper
} from './styled';
// import { NavAside } from './NavAside';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  setMobileNavOpen,
  setMobileNavClose
} from '../../saturdaylive/saturdayLiveReducer';

const NavAside = lazy(() => import('./NavAside/NavAside'));

export const NavigationMobile = () => {
  const showNavAside = useAppSelector(
    (state) => state.saturdayLive.showNavAside
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <NavListMobile>
        <li>
          <NavLink to="/">
            <img
              height={60}
              width={178}
              src="sat7.gif"
              alt="logo SaturdayLive"
              aria-label="strona główna"
            />
          </NavLink>
        </li>
        <li>
          <HamburgerButton
            aria-label="otwórz nawigację mobilną"
            onClick={() => dispatch(setMobileNavOpen())}
          >
            <MenuHamburgerIcon />
          </HamburgerButton>
        </li>
      </NavListMobile>
      {showNavAside && (
        <ScreenBlockingWrapper onClick={() => dispatch(setMobileNavClose())} />
      )}
      <Suspense fallback={<div>...</div>}>
        <NavAside />
      </Suspense>
    </>
  );
};
