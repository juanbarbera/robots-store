import styled from 'styled-components';

export const CoreBody = styled.section`
  z-index: 1;
  padding-top: ${props => props.isMobile ? '15vh' : '0'};
  font-family: 'Anek Devanagari', sans-serif;
  font-weight: 300;
  box-sizing: border-box;
  background-color: #eeeeee;  
  @media (min-width: 821px) {
    margin-bottom: 0;
  }
`;

export const CoreContainer = styled.div`
  margin: 0 7.5vw;
`;





