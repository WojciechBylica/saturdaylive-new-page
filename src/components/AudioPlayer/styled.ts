import styled from 'styled-components';

export const PlayerSection = styled.section`
  background-color: #00000091;
  border-radius: 10px;
  margin: 0 16px;
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 400px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 10px;
`;
