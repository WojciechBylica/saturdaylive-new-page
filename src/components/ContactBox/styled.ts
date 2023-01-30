import styled from 'styled-components';
import { ReactComponent as MailBox } from '../../icons/mailbox.svg';

export const ContactArticle = styled.article`
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const ContactSection = styled.section`
  margin: 16px auto;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: calc(100% - 32px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.backgroundLight};

  @media (max-width: ${({ theme }) => theme.media.lg}px) {
    display: block;
  }
`;

export const ContactMailLink = styled.a`
  color: ${({ theme }) => theme.color.primary};
  border: 1px solid;
  font-size: 34px;
  display: flex;
  align-items: center;
  width: fit-content;
  margin-bottom: 16px;
  text-decoration: none;
  margin: 16px 0;
  padding: 12px 16px;
  border-radius: 10px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition-duration: 500ms;

  @media (max-width: ${({ theme }) => theme.media.sm}px) {
    font-size: 16px;
  }

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
    background: ${({ theme }) => theme.color.linkHoverBackground};
    border-radius: 10px;
  }
`;

export const ContactMailIcon = styled(MailBox)`
  margin-right: 16px;
  height: 34px;
  width: 34px;
`;

export const ImportantParagraph = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const Imagebox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.backgroundDark};
  border-radius: 0 4px 4px 0;

  @media (max-width: ${({ theme }) => theme.media.lg}px) {
    border-radius: 0 0 4px 4px;
  }
`;

export const DescriptionBox = styled.div`
  padding: 16px;
`;
