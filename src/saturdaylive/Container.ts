import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0.5rem 1rem;
  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    max-width: 768px;
  }

  @media (max-width: ${({ theme }) => theme.media.lg}px) {
    max-width: 992px;
  }

  @media (max-width: ${({ theme }) => theme.media.lg}px) {
    max-width: 1200px;
  }

  @media (max-width: ${({ theme }) => theme.media.lg}px) {
    max-width: 1400px;
  }
`;
