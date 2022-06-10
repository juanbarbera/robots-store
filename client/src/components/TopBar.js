import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Background = styled.div`
  width: 100vw;
  height: 9vh;
  background-color: #4D51C4;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.25s ease;
  z-index: 3;
  font-family: 'Anek Devanagari', sans-serif;
  display: flex;
  justify-content: flex-end;
  color: white;
`;

const LogoWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9vh;
  font-family: 'Yanone Kaffeesatz', sans-serif;  
  font-size: 2rem;
  transition: all .3s ease;
  color: white;
  text-decoration: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const LogoLuxembourg = styled.div`
  font-weight: 700;
  font-size: 1em;
  letter-spacing: 2px;
`;

const LogoRobots = styled.div`
  font-weight: 300;
  font-size: .7em;
`;

const CustomAppBar = styled(AppBar)`
  && {
    background-color: #4D51C4;
    height: 8.5vh;
    position: fixed;
    box-shadow: none;
  }
`;

const CustomToolBar = styled(Toolbar)`
  && {
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

const DrawerBody = styled.div`
  margin-top: 8.4vh;
  height: auto;
  width: 100%;
  background-color: #4D51C4;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Anek Devanagari', sans-serif;
`;

const DrawerItems = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 4vh 0;
  font-size: 1.3em;
`;

const Logo = () => {
  return (
    <LogoWrapper to="/">
      <LogoLuxembourg>Luxembourg</LogoLuxembourg>
      <LogoRobots>Robots</LogoRobots>
    </LogoWrapper>
  )
}

export const TopBar = () => { 
  const [openNavBar, setOpenNavBar] = useState(false);

  const toggleDrawer = booleanValue => () => {
    setOpenNavBar(booleanValue);
  };

  return (
    <>
    <Background>
        <Logo />
        <IconButton
          size="small"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(!openNavBar)}
        >
          <MenuIcon />
          </IconButton>  
      
    </Background>
    
    <Drawer
      anchor='top'
      open={openNavBar}
      onClose={toggleDrawer(false)}
    >
      <CustomAppBar>
        <CustomToolBar>
          <Logo />
          <IconButton
              size="small"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(!openNavBar)}
          >
            <MenuIcon />
          </IconButton>
        </CustomToolBar>
      </CustomAppBar>
      <DrawerBody>
        <DrawerItems to="/" style={{ marginTop: '5vh'}}>HOME</DrawerItems>
        <DrawerItems to="/products">ALL ROBOTS</DrawerItems>
        <DrawerItems to="/sell">SELL FORM</DrawerItems>
        {/* <DrawerItems to="/cart">CART</DrawerItems> */}
      </DrawerBody>
    </Drawer>
    
    </>
  )
}