import React from 'react';

import { StyledNav } from './styled';
import { NavigationMobile } from './NavigationMobile';
import NavigationDesktop from './NavigationDesktop';
import { useGetScreenWidth } from './useGetScreenWidth';

export const Nav = () => {
  const screenWidth = useGetScreenWidth();
  return (
    <StyledNav>
      {screenWidth > 992 ? <NavigationDesktop /> : <NavigationMobile />}
    </StyledNav>
  );
};
