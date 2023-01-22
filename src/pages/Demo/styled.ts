import styled from 'styled-components'

export const FilmWrapper = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 32px;
`

export const DemoIframe = styled.iframe`
    width: 560px;
    height: 315px;
    box-shadow: 1px 2px 5px #333;
    margin: 16px;
    border-radius: 10px;
    aspect-ratio: 16/9 !important;

    @media (max-width: ${({ theme }) => theme.media.xl}px) {
        width: 460px;
        height: 258px;
      }

      @media (max-width: ${({ theme }) => theme.media.lg}px) {
        width: 350px;
        height: 196px;
      }

      @media (max-width: ${({ theme }) => theme.media.md}px) {
        width: calc(100% - 32px);
        height: auto;
      }
`