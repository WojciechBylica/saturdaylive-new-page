import styled from 'styled-components';
import foto from './foto1.jpg';

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
  /* background: radial-gradient(black, transparent); */
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
  padding: 16px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.color.backgroundLight};
`;
