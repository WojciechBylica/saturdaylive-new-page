import styled from 'styled-components';
import { ReactComponent as X } from './x.svg';

export const StyledAside = styled.aside<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1080;
  width: 200px;
  height: 100%;
  max-height: 400px;
  border-radius: 0 5px 5px 0;
  background-color: ${({ theme }) => theme.color.navBackground};
  color: ${({ theme }) => theme.color.secondary};
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: transform 1s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`;

export const CloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const AsideList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin: 0;
`;

export const AsideListField = styled.li`
  margin: 16px 0;
`;

export const XIcon = styled(X)`
  width: 40px;
  height: 40px;
`;
