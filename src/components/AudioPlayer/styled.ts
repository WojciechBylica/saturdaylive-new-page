import styled from 'styled-components';

export const StyledIframe = styled.iframe`
  width: calc(100% - 32px);
  height: 400px;
  box-shadow: 1px 2px 5px #333;
  margin: 16px;
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    width: calc(100% - 32px);
  }
`;
