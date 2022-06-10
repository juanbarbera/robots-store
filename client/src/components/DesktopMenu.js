import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Background = styled.div`
  width: 100%;
  height: 15vh;
  top: 0;
  left: 0;
  background-color: #4D51C4;
  color: white;
  font-family: 'Anek Devanagari', sans-serif;
  font-weight: 300;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const BackgroundWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (min-width: 821px) {
    width: 100%;
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const LogoWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  transition: all .19s ease;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const LogoLuxembourg = styled.div`
  font-weight: 700;
  font-size: 2.5em;
  letter-spacing: 2px;
`;

const LogoRobots = styled.div`
  font-weight: 300;
  font-size: 1.8em;
`;

const NavItem = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all .3s;
  font-size: 1.55em;
  :hover {
    color: #BCB1FF;
  }
  @media (min-width: 821px) {
    font-size: 1.8vw;
  }
  @media (min-width: 1200px) {
    font-size: 1.5em;
  }
`;

export const DesktopMenu = () => {
  return (
    <Background>
      <BackgroundWrapper>
      <LogoWrapper to="/">
          <LogoLuxembourg>Luxembourg</LogoLuxembourg>
          <LogoRobots>Robots</LogoRobots>
        </LogoWrapper>
        <NavItem to="/">HOME</NavItem>
        <NavItem to="/products">ALL ROBOTS</NavItem>
        
        <NavItem to="/sell">SELL FORM</NavItem>
        {/* <NavItem to="/cart">CART</NavItem> */}
      </BackgroundWrapper>
    </Background>
  )
}