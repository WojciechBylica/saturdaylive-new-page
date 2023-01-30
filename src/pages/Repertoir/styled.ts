import styled, { css } from 'styled-components';

export const RepertoirSection = styled.section<{ $modified?: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 16px;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    flex-direction: column;
    align-items: flex-start;
  }

  ${({ $modified }) =>
    $modified &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: start;

      @media (max-width: ${({ theme }) => theme.media.xl}px) {
        grid-template-columns: 1fr 1fr;
      }

      @media (max-width: ${({ theme }) => theme.media.md}px) {
        grid-template-columns: 1fr;
      }
    `};
`;

export const StyledHeader = styled.h2`
  margin: 0 0 16px 0;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 0;

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ListField = styled.li`
  list-style-type: none;
`;

export const RepertoirLink = styled.a`
  color: ${({ theme }) => theme.color.primary};
  font-size: 20px;
  display: flex;
  align-items: center;
  width: fit-content;
  margin-bottom: 16px;
  text-decoration: none;
  margin: 16px 8px 16px 0;
  padding: 12px 16px;
  border-radius: 10px;
  cursor: pointer;
  background-color: inherit;
  border: none;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
    background: ${({ theme }) => theme.color.linkHoverBackground};
  }
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
  border: 1px solid ${({ theme }) => theme.color.primary};
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

export const AlfabeticalList = styled.ul<{ $modified?: boolean }>`
  columns: 3;
  // padding-left: 0;
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
    }
  `};
`;
