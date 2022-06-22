import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

import { TopBar } from '../components/TopBar';
import { Footer } from '../components/Footer';
import { DesktopMenu } from '../components/DesktopMenu';
import { CoreBody } from '../style';
import Button from '@mui/material/Button';
import RotateRightIcon from '@mui/icons-material/RotateRight';

const Main = styled.div`
  flex: 3.5;
  width: 90%;
  margin: 0 auto;
  height: auto;
  padding: 15vh 0vw 6vh 0vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
  grid-gap: 2vh;
  @media (min-width: 821px) {
    padding: 5vh 0 5vh 0;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1250px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Product = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3% 5%;
  border: 2px solid #F2F2F2;
  border-radius: 10px;
  cursor: default;
  transition: all .25s ease-out;
  :hover {
    transform: scale(1.05, 1.05);
    box-shadow: 0 0 30px rgba(0,0,0,0.5), 0 0 45px rgba(0,0,0,0.3);
  }
`;

const ProductImage = styled.img`
  height: 15vh;
  width: 60%;
  object-fit: cover;
`;

const ProductTitle = styled.p`
  margin-top: 1%;
  margin-bottom: -5%;
  line-height: 2.5vh;
  height: 20%;
  color: black;
  font-size: .9em;
`;

const ProductManufacturer = styled.div`
  font-size: .8em;
  margin-top: 10%;
`;

const ProductPrice = styled.div`
  font-size: 1.4em;
  margin-top: 0;
`;

const ProductButton = styled(Button)`
  && {
    width: 80%;
    height: 7.5vh;
    color: white;
    background-color: #4D51C4;
    border: 1px solid transparent;
    transition: all .3s;
    :hover {
      color: #E6E6E6;
      background-color: #4D51C4;
      border: 1px solid transparent;
      color: #BCB1FF;
    }
  }
`;

const Centralizer = styled.div`
  height: 85vh;
  width: 100%;
  left: 20%;
  top: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const RotatingIcon = styled(RotateRightIcon)`
  && {
    width: 35%;
    height: 30vh;
    color: black;
    animation: ${rotation} 0.95s ease infinite;
  }
`;

export const Products = () => {
  const [resolution, setResolution] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const viewPortWidth = window.innerWidth;
    if (viewPortWidth <= 820) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
    window.scrollTo(0,0);    
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 820 ? true : false);
    })

    axios.get('/api/robots')
      .then(res => {
        const robots = res.data;
        setRobots(robots)
      })
      .catch(err => {
        console.log(`there is something wrong! ${err}`);
      });   
  },[]);

  useEffect(() => {
    setResolution(window.innerWidth)
    window.addEventListener('resize', () => {
      setResolution(window.innerWidth)
    })
  }, [resolution]);

  // const numberToManageTitleLength = (resolution) => {
  //   if (resolution >= 821 && resolution <= 1100) {
  //     return 20;
  //   }
  //   if (resolution >= 1101 && resolution <= 1250) {
  //     return 25;
  //   }
  //   if (resolution >= 1251 && resolution <= 1400) {
  //     return 30;
  //   }
  //   else {
  //     return 40;
  //   }
  // };

  // const numberToManageOverviewLength = (resolution) => {
  //   if (resolution >= 821 && resolution <= 1100) {
  //     return 30;
  //   }
  //   if (resolution >= 1101 && resolution <= 1250) {
  //     return 40;
  //   }
  //   if (resolution >= 1251 && resolution <= 1400) {
  //     return 70;
  //   }
  //   else {
  //     return 110;
  //   }
  // };

  return (
    <>
    { isMobile ? (
      <>
      <TopBar />
      </>
      
    ) : (
      <DesktopMenu/>
    )}
    <CoreBody>
        {robots.length > 0 ? (
          <Main isMobile={isMobile}>
          {robots.map(robot => {
            return (
              <Product key={robot._id}>
                  <ProductImage src={robot.imageUrl}/>
                    <ProductTitle to={ `/products/${robot.id}`}>{robot.name}</ProductTitle>
                    <ProductManufacturer>{`by: ${robot.manufacturer}`}</ProductManufacturer>
                    <ProductPrice>{`€${robot.price}`}</ProductPrice>
                      <ProductButton
                        variant='outlined'
                        component={Link}
                        to={ `/products/${robot._id}`}> View </ProductButton>           
                </Product>
            )
          })}
          </Main>
        ) : <Centralizer>
              <RotatingIcon />
            </Centralizer>}        
    </CoreBody>
    <Footer /> 
    </>
  )
}



