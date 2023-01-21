import styled from 'styled-components';

export const AsideWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.color.navAsideBackground};
  transition: 0.5s;
`;

export const StyledAside = styled.aside`
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
