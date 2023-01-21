import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const activeclassname = 'active';

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
`;

export const StyledNav = styled.nav`
  margin: 0 auto;
  background: ${({ theme }) => theme.color.navBackground};
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0.25rem 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;
