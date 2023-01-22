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

export const StyledPlayerWrapper = styled.div`
  font-size: 10px;
  color: #cccccc;
  line-break: anywhere;
  word-break: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans,
    Garuda, Verdana, Tahoma, sans-serif;
  font-weight: 100;
`;

export const StyledPlayerLink = styled.a`
  color: #cccccc;
  text-decoration: none;
`;
