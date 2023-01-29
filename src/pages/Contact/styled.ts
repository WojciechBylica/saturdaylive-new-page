import styled from 'styled-components';

export const StyledMapIframe = styled.iframe`
  width: calc(100% - 32px);
  height: 300px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 16px 16px 32px 16px;
  border-radius: 10px;
  border: 0;
  background: ${({ theme }) => theme.color.backgroundDark};
`;
