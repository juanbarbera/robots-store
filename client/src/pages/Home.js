import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

import { TopBar } from '../components/TopBar';
import { DesktopMenu } from '../components/DesktopMenu';
import { Footer } from '../components/Footer';
import { CoreBody } from '../style';

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import RotateRightIcon from '@mui/icons-material/RotateRight';

import andyKelly from '../assets/images/andy-kelly.jpg';
import pexels2 from '../assets/images/pexels2.jpg';
import arms from '../assets/images/arms.webp';
import threeDPrinters from '../assets/images/3d-printer.jpeg';
import drones from '../assets/images/drones.jpeg';
import education from '../assets/images/education.png';

const Introduction = styled.div`
  width: 100%;
  padding: 2vh 2.5vw;
  padding-top: 15vh;
  @media (min-width: 821px) {
    padding-top: 5vh;
  }
`;

const SloganCentralizer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slogan = styled.h1`
  text-align: center;
  @media (min-width: 820px) {
    display: inline-block;
    font-size: 2.35em;
  }  
`;

const IntroText = styled.p`
  font-size: 1.3em;
  margin-top: 5vh !important;
  width: 90%;
  margin: 0 auto;
`;

const BuyOrSell = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 60vh;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 4vw;
  padding: 5vh 2.5vw 2vh 2.5vw;
  @media (min-width: 821px) {
    height: 40vh;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 2vw;
  }
`;

const Buy = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('${andyKelly}');
  background-size: cover;
  background-position: 50% 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5em;
  text-shadow: 0 0 10px black, 0 0 10px black;
  cursor: pointer;
  text-decoration: none;

  transition: all .3s;
  :hover {
    font-size: 1.65em;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('${andyKelly}');
    background-size: cover;
    background-position: 50% 50%;
    transform: scale(1.035, 1.05);
    box-shadow: 0 0 30px rgba(0,0,0,0.5), 0 0 45px rgba(0,0,0,0.3);
  }
`;

const Sell = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('${pexels2}');
  background-size: cover;
  background-position: 50% 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5em;
  text-shadow: 0 0 10px black, 0 0 10px black;
  cursor: pointer;
  text-decoration: none;

  transition: all .3s;
  :hover {
    font-size: 1.65em;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('${pexels2}');
    background-size: cover;
    background-position: 50% 50%;
    transform: scale(1.035, 1.05);
    box-shadow: 0 0 30px rgba(0,0,0,0.5), 0 0 45px rgba(0,0,0,0.3);
  }
`;

const CarouselIndicator = styled.div`
  height: 5vh;
  width: 100%;
  margin-top: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const waveAnimation = keyframes`
  0% {
  transoform: translateX(0);
  }
  50% {
  transform: translateX(50px);
  }
  100% {
  transform: translateX(0);
  }
`;

const Slide = styled.div`
  animation-name: ${waveAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  color: black;
`;

const MySwiper = styled(Swiper)`
  height: 100%;
  background-color: #eeeeee;
`;

const Products = styled.div`
  width: 100%;
  height: 40vh;
  margin: 0 0 5vh 0;
  overflow: hidden;
`;

const Product = styled.div`
  height: 100%;
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 3% 5%;
  border: 2px solid #F2F2F2;
  border-radius: 10px;
  cursor: default;
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
  margin-top: 0;
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

const Categories = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 60vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 4vw;
  padding: 5vh 2.5vw;
  padding-bottom: 5vh;
  @media (min-width: 820px) {
    height: 40vh;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2vw;
    padding-bottom: 10vh;
  }
`;

const Category = styled.div`
  height: 40vh;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('${props => props.url}');
  background-size: cover;
  background-position: 50% 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5em;
  text-shadow: 0 0 10px black, 0 0 10px black;
  cursor: pointer;
  transition: all .25s;
  :hover {
    font-size: 1.65em;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('${props => props.url}');
    background-size: cover;
    background-position: 50% 50%;
    transform: scale(1.02, 1.05);
    box-shadow: 0 0 30px rgba(0,0,0,0.5), 0 0 45px rgba(0,0,0,0.3);
  }
`;

const Centralizer = styled.div`
  height: 100%;
  width: 100%;
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
    width: 100%;
    height: 40vh;
    color: black;
    animation: ${rotation} 2s infinite;
    animation-timing-function: linear;
  }
`;

export const Home = () => {
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

    // const arrowRight = document.querySelector('.swiper-button-next');
    // if (arrowRight) {
    //   arrowRight.style.color = 'white';
    // };

    // const arrowLeft = document.querySelector('.swiper-button-prev');
    // if (arrowLeft) {
    //   arrowLeft.style.color = 'white';
    // };
    
    // http://localhost:5000 --> unnecessary for heroku setup
    axios.get('/api/robots')
      .then(res => {
        const robots = res.data;
        setRobots(robots);
      })
      .catch(err => {
        console.log(`there is something wrong! ${err}`);
      });   

  },[]);

  const onPathClickAlert = path => {
    alert(`will go to ${path} in the final project.`)
  }

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

      <Introduction>
        <SloganCentralizer>
          <Slogan>
            THE LEADING ELECTRONICS STORE & DISTRIBUTOR
          </Slogan>
        </SloganCentralizer>        
        <IntroText>
          Welcome to Luxembourg Robots - your one-stop shop for electronic components and power supplies. We have been in business for over 10 years and carry a wide selection of products at great prices. What sets us apart from other electronics stores is our ability to offer a large selection of in-stock items at a fraction of the price of our competitors. Shop our brand-name products as well as our own lines of electronic parts and kits.
        </IntroText>
      </Introduction>

      <BuyOrSell>
        <Link to="/products">
          <Buy>
            All Robots
          </Buy>
        </Link>
        <Link to="/sell">
          <Sell>
            Sell your Robot with us
          </Sell>
        </Link>
      </BuyOrSell>

      <CarouselIndicator>
        <Slide><ArrowRightAltIcon /></Slide>
      </CarouselIndicator>

      {robots.length > 0 ? (
        <Products>
        <MySwiper
          slidesPerView={isMobile ? 2 : 5}
          spaceBetween={isMobile ? 5 : 10}
          freeMode={true}
          modules={[FreeMode]}
          loop={true}
        >
          {robots.slice(0,6).map(robot => {
            return (
              <SwiperSlide key={robot._id}>
                <Product>
                  <ProductImage src={robot.imageUrl}/>
                    <ProductTitle to={ `/products/${robot.id}`}>{robot.name}</ProductTitle>
                    <ProductManufacturer>{`by: ${robot.manufacturer}`}</ProductManufacturer>
                    <ProductPrice>{`€${robot.price}`}</ProductPrice>
                      <ProductButton
                        variant='outlined'
                        component={Link}
                        to={ `/products/${robot._id}`}> View </ProductButton>           
                </Product>
              </SwiperSlide>  
            )})  
          }
        </MySwiper>
      </Products>
      ) : 
        <Products>
        <Centralizer>
          <RotatingIcon />
        </Centralizer>
      </Products>
      }

      


      
      


      <Categories>
        <Category onClick={() => onPathClickAlert("Robotic Arms Category")} url={arms}>*Robotic Arms*</Category>
        <Category onClick={() => onPathClickAlert("3D Printers Category")} url={threeDPrinters}>*3D Printers*</Category>
        <Category onClick={() => onPathClickAlert("Drones & UAVs Category")} url={drones}>*Drones & UAVs*</Category>
        <Category onClick={() => onPathClickAlert("Robotics Education Category")} url={education}>*Robotics Education*</Category>
      </Categories>      

    </CoreBody>
    <Footer />
    </>
  )
}