import styled, {css} from 'styled-components';

export const MainContentBox = styled.section<{$modified?: boolean}>`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  ${({ $modified }) =>
    $modified &&
    css`
    z-index: 1000;
    background: #00000061;
    display: flex;
    align-items: center;
    justify-content: center;
    `};
`;
