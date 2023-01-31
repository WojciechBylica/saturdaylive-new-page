import styled, { css } from 'styled-components';

export const RepertoirSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 16px;

  @media (max-width: ${({ theme }) => theme.media.sm}px) {
    display: block;
  }
`;

export const RepertoireButtons = styled.section<{ $modified?: boolean }>`
  background: ${({ theme }) => theme.color.backgroundDark};
  color: ${({ theme }) => theme.color.secondary};
  border-radius: 0 10px 10px 0;

  @media (max-width: ${({ theme }) => theme.media.sm}px) {
    border-radius: 0 0 10px 10px;
  }

  ${({ $modified }) =>
    $modified &&
    css`
      background: ${({ theme }) => theme.color.backgroundLight};
      color: ${({ theme }) => theme.color.primary};
      border-radius: 10px 0 0 10px;

      @media (max-width: ${({ theme }) => theme.media.sm}px) {
        border-radius: 10px 10px 0 0;
      }
    `};
`;

export const StyledHeader = styled.h2`
  padding: 16px 0 0 16px;
  margin: 0;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ListField = styled.li`
  list-style-type: none;
`;

export const RepertoirLink = styled.a<{ $modified?: boolean }>`
  color: ${({ theme }) => theme.color.primary};
  font-size: 20px;
  display: flex;
  align-items: center;
  width: fit-content;
  margin-bottom: 16px;
  text-decoration: none;
  margin: 16px;
  padding: 12px 16px;
  border-radius: 10px;
  cursor: pointer;
  background-color: inherit;
  border: 1px solid;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition-duration: 500ms;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
    background: ${({ theme }) => theme.color.linkHoverBackground};
  }

  ${({ $modified }) =>
    $modified &&
    css`
      background: ${({ theme }) => theme.color.backgroundLight};
      color: ${({ theme }) => theme.color.primary};
    `};
`;

export const RepertoirBigField = styled.li`
  margin-bottom: 32px;
  padding-left: 0;
`;
export const RepertoirSmallList = styled.ul`
  list-style-type: disc;
`;

export const RepertoirSmallListField = styled.li`
  padding: 4px 0;
`;

export const ListSection = styled.section`
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 16px;
  padding: 16px;
  box-shadow: 0 0 0 black, 0 0 6em #8a4d0f inset;
  background: #fffef0;
`;

export const ListHeader = styled.h2`
  display: flex;
  align-items: center;
`;

export const HeaderImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 20px;
`;

export const AlphabeticalList = styled.ul<{ $modified?: boolean }>`
  columns: 3;
  margin-top: 0;

  @media (max-width: ${({ theme }) => theme.media.xl}px) {
    columns: 2;
  }

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    columns: 1;
  }

  ${({ $modified }) =>
    $modified &&
    css`
      list-style-type: none;
      padding-left: 0;
    `};
`;
