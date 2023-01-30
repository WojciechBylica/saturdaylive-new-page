import styled, { css } from 'styled-components';

export const MainContentBox = styled.section<{ $modified?: boolean }>`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  ${({ $modified }) =>
    $modified &&
    css`
      text-align: center;
      max-width: 1380px;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(
          270deg,
          #333 14.11%,
          rgba(51, 51, 51, 0.873268) 15.08%,
          rgba(51, 51, 51, 0.720529) 16.51%,
          rgba(51, 51, 51, 0.294577) 19.99%,
          rgba(51, 51, 51, 0.159921) 21.88%,
          rgba(51, 51, 51, 0) 25.68%
        ),
        linear-gradient(
          90deg,
          #333 13.6%,
          rgba(51, 51, 51, 0.984059) 14.58%,
          rgba(51, 51, 51, 0.967732) 15.44%,
          rgba(51, 51, 51, 0.865569) 16.3%,
          rgba(51, 51, 51, 0.230315) 22.87%,
          rgba(51, 51, 51, 0) 26.64%
        ),
        linear-gradient(
          180deg,
          #333 0%,
          rgba(51, 51, 51, 0.689555) 4.66%,
          rgba(51, 51, 51, 0.439033) 9.34%,
          rgba(51, 51, 51, 0.20628) 15.16%,
          rgba(51, 51, 51, 0) 24.22%
        ),
        linear-gradient(
          189.44deg,
          rgba(51, 51, 51, 0) 58.48%,
          rgba(51, 51, 51, 0.106473) 63.17%,
          rgba(51, 51, 51, 0.235359) 68.85%,
          rgba(51, 51, 51, 0.492821) 78.08%,
          rgba(51, 51, 51, 0.740286) 85.86%,
          #333 92.87%
        );

      @media (max-width: ${({ theme }) => theme.media.lg}px) {
        max-width: 1000px;
      }

      @media (max-width: ${({ theme }) => theme.media.sm}px) {
        background: linear-gradient(
            270deg,
            #333 1%,
            rgba(51, 51, 51, 0.873268) 5.5%,
            rgba(51, 51, 51, 0.720529) 6%,
            rgba(51, 51, 51, 0.294577) 6.5%,
            rgba(51, 51, 51, 0.159921) 21.88%,
            rgba(51, 51, 51, 0) 25.68%
          ),
          linear-gradient(
            90deg,
            #333 1%,
            rgba(51, 51, 51, 0.984059) 5.5%,
            rgba(51, 51, 51, 0.967732) 6%,
            rgba(51, 51, 51, 0.865569) 6.4%,
            rgba(51, 51, 51, 0.230315) 7%,
            rgba(51, 51, 51, 0) 26.64%
          ),
          linear-gradient(
            180deg,
            #333 0%,
            rgba(51, 51, 51, 0.689555) 4.66%,
            rgba(51, 51, 51, 0.439033) 9.34%,
            rgba(51, 51, 51, 0.20628) 15.16%,
            rgba(51, 51, 51, 0) 24.22%
          ),
          linear-gradient(
            189.44deg,
            rgba(51, 51, 51, 0) 58.48%,
            rgba(51, 51, 51, 0.106473) 63.17%,
            rgba(51, 51, 51, 0.235359) 68.85%,
            rgba(51, 51, 51, 0.492821) 78.08%,
            rgba(51, 51, 51, 0.740286) 85.86%,
            #333 92.87%
          );
      }
    `};
`;
