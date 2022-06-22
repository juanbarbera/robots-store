import styled from 'styled-components';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Background = styled.footer`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2vh;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.2rem;
  cursor: default;
  @media (min-width: 821px) {
    padding-bottom: 0;
  }
`;

const Service = styled.div`
  font-family: 'Anek Devanagari', sans-serif;
  font-weight: 200;
  text-align: center;
`;

const Rights = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.5vh;
`;

const Flags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.5vh 0 1.5vh;
`;

const Flag = styled.img`
  margin: 0 1vw;
`;

export const Footer = () => {
  return (
    <Background>
      <div>
        <SmartToyIcon />
      </div>
      <Service>
        *components* are non-functioning demo components 
      </Service> 
      <Service>
        Service Time Monday to Friday: 9 AM - 4 PM CET (Central European Time) 
      </Service>      
      <Rights><CopyrightIcon />2022 - 2022 Luxembourg Robots</Rights>
      <div>No Rights Reserved</div>
      <Flags>
        <Flag src="https://www.robotshop.com/skin/frontend/rb/2018/fixtures/build/images/store-common/ico-visa.png"/>
        <Flag src="https://www.robotshop.com/skin/frontend/rb/2018/fixtures/build/images/store-common/ico-mastercard.png"/>
        <Flag src="https://www.robotshop.com/skin/frontend/rb/2018/fixtures/build/images/store-common/ico-klarna.png"/>
        <Flag src="https://www.robotshop.com/skin/frontend/rb/2018/fixtures/build/images/store-common/ico-paypal.png"/>
        <Flag src="https://www.robotshop.com/skin/frontend/rb/2018/fixtures/build/images/store-common/ico-paypal-credit.png"/>
      </Flags>
    </Background>
  )
}