import styled from 'styled-components';
import { ReactComponent as MailBox } from '../../icons/mailbox.svg';

export const ContactWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    flex-direction: column-reverse;
  }
`;

export const StyledMapIframe = styled.iframe`
  width: 650px;
  height: 400px;
  box-shadow: 1px 2px 5px #333;
  margin: 16px;
  border-radius: 10px;
  border: 0;
  flex-basis: 45%;

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    width: calc(100% - 32px);
    flex-basis: initial;
  }
`;

export const ContactSection = styled.section`
  margin: 16px;
  padding: 16px;
  border: 1px solid #333;
  border-radius: 10px;
  box-shadow: 1px 2px 5px #333;
  flex-basis: 45%;
  @media (max-width: ${({ theme }) => theme.media.lg}px) {
    width: calc(100% - 32px);
  }
`;

export const ContactMailLink = styled.a`
  color: ${({ theme }) => theme.color.primary};
  font-size: 34px;
  display: flex;
  align-items: center;
  width: fit-content;
  margin-bottom: 16px;
  text-decoration: none;
  margin: 16px 0;
  padding: 12px 16px;
    border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.media.lg}px) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.media.md}px) {
    font-size: 34px;
  }

  @media (max-width: ${({ theme }) => theme.media.sm}px) {
    font-size: 20px;
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
