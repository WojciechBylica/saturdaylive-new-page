import styled from 'styled-components';
import foto from './foto1.jpg';
import fotoBgr from './foto2.jpg';

export const StyledHeader = styled.header`
  position: relative;
  background-image: url(${foto});
  height: 510px;
  margin-bottom: 32px;
  background-position: center;
  background-attachment: initial;
  background-size: contain;
  color: white;
  background-color: #333;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
  position: absolute;
  background: #333;
  /* width: 100%; */
  color: white;
  /* z-index: 1000; */
  display: flex;
  left: 0;
  right: 0;
  height: 510px;
`;

export const HomeDescription = styled.section`
  margin: 16px 16px 48px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-image: url(${fotoBgr});
`;

export const DescriptionWrapper = styled.div`
  background: ${({ theme }) => theme.color.backgroundLight};
  padding: 16px;
  opacity: 0.8;
  border-radius: 10px;
`;
