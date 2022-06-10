import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

import { TopBar } from '../components/TopBar';
import { DesktopMenu } from '../components/DesktopMenu';
import { Footer } from '../components/Footer';
import { CoreBody,CoreContainer } from '../style';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RotateRightIcon from '@mui/icons-material/RotateRight';

const PathWrapper = styled.div`
  width: 100%;
  font-size: 1.05em;
  font-weight: 200;
`;

const Path = styled.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: gray;
  }
`;

const PathHome = styled(Link)`
  && {
    text-decoration: none;
    color: black;
    :hover {
      color: gray;
    }
  }
`;

const CurrentPath = styled.span`
  font-weight: 400;
`;

const ImageTitleAndPanel = styled.div`
  
  @media (min-width: 820px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding-top: 5vh;
    width: 100%;
  }
`;

const TemplateImage = styled.img`
  width: 100%;
  height: 30vh;
  margin-top: 2.5vh;
  background-image: url('${props => props.url}');
  background-size: cover;
  background-position: 50% 50%;
  @media (min-width: 820px) {
    height: 40vh;
    width: 90%;
    margin-top: 0;
    margin-left: 10%;
    box-sizing: border-box;
  }
`;

const TitleAndHighlights = styled.div`
  
  @media (min-width: 820px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 1vw;
    height: 90%;
  }
`;

const TemplateTitle = styled.div`
  width: 100%;
  font-size: 1.5em;
  font-weight: 400;
  margin-top: 5vh;
  @media (min-width: 820px) {
    margin: 0;
    }
`;

const Manufacturer = styled.div`
  margin: 0 7.5vw 5vh 7.5vw;
  @media (min-width: 820px) {
    margin-bottom: 2vh;
    }
`;

const TemplateHighlights = styled.div`
  width: 75vw;
  margin-top: 5vh;
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 7.5vw;
  @media (min-width: 820px) {
    margin-top: 3vh;
    font-size: 1em;
    width: 100%;
    margin: 0;
    }
`;

const Highlight = styled.div`
  font-size: 1.2rem;
  margin-top: .5vh;
  @media (min-width: 820px) {
    margin: 0;
    font-size: 1.2em;
    }
`;

const HighlightsOverviewSpan = styled.span`
  font-size: 1.2em;
  font-weight: 400;
`;

const PanelCentralizer = styled.div`
  display: flex;
  justify-content: center;
`;

const Panel = styled.div`
  margin-top: 5vh;
  width: 70%;
  border-radius: 10px;
  height: 35vh;
  font-size: 1.5rem;
  color: black;
  background-color: white;
  @media (min-width: 820px) {
    width: 70%;
    height: 40vh;
    margin-top: 0;
    box-sizing: border-box;
  }
`;

const PriceAndStock = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Price = styled.div`
  font-size: 1.5em;
  letter-spacing: .5px;
  @media (min-width: 820px) {
    font-size: 1.7em;
    }
`;

const Stock = styled.div`
  font-size: 0.8em;
  font-weight: 300;
`;

const Qty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  /* disable text selection */
  -webkit-touch-callout: none; 
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media (min-width: 820px) {
    font-size: .8em;
    }
`;

const QtyControls = styled.div`
  display: flex;
  margin-top: -1vh;
`;

const QtyText = styled.div`
  margin-bottom: 2%;
  @media (min-width: 820px) {
    margin-bottom: 5%;
    margin-top: 0;
  }
`;

const ArrowButton = styled(IconButton)`
  && {
    color: white;
    background-color: black;
    :hover {
      color: white;
      background-color: black;
    }
  }
`;

const CartDiv = styled.div`
  && {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CartButton = styled(Button)`
  && {
    width: 90%;
    height: 80%;
    background-color: #4D51C4;
    color: white;
    transition: all .3s;
    :hover {
      background-color: #4D51C4;
      color: #F3F3F3;
    }
  }
`;

const QtyAmount = styled.div`
  margin: 0 10px;
  font-size: 1.2em;
`;

const TemplateDescription = styled.div`
  padding: 5vh 0;
  font-size: 1.2rem;
  font-weight: 300;
  @media (min-width: 820px) {
    padding-top: 10vh;
  }
`;

const Centralizer = styled.div`
  height: 85vh;
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

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Delete = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 821px) {
    display: flex;
    justify-content: flex-start;
  }
`;

const Buttons = styled.div`
  width: 80%;
  height: 40%;
  display: flex;
  flex-direction: column;
  @media (min-width: 821px) {
    width: 100%;
    justify-content: space-evenly;
    flex-direction: row;
  }  
`;

const DeleteButton = styled(Button)`
  && {
    background-color: red;
    color: white;
    margin: 3vh 0;
    :hover {
      background-color: red;
      color: white;
    }
  }
`;

const CancelButton = styled(Button)`
  && {
    background-color: black;
    color: white;
    margin: 3vh 0;
    :hover {
      background-color: black;
      color: white;
    }
  }
`;

export const RobotDetails = () => {
  const [isMobile, setIsMobile] = useState(true);
  let [amount, setAmount] = useState(1);
  const [robot, setRobot] = useState({});
  let { id } = useParams();
  const history = useNavigate();
  const [shouldShow, setShouldShow] = useState(false);

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

    const id = window.location.href.split("/").reverse()[0];

    axios.get(`/api/robots/${id}`)
      .then(res => {
        const robot = res.data;
        setRobot(robot);
      })
      .catch(err => {
        console.log(`there is something wront! Error: ${err}`);
      });
    },[]);

    const onClickIncreaseAmount = () => {
      if (amount < 20) {
        setAmount(amount + 1);
      }
    };
  
    const onClickDecreaseAmount = () => {
      if (amount > 1) {
        setAmount(amount - 1);
      }
    }

    const onClickAlert = path => {
      alert(`Goes to ${path}.`)
    }

    const onClickDelete = id => {
      axios.delete(`/api/robots/${id}`);
      history('/products');
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
    { robot ? (
      <>
      <CoreBody isMobile={isMobile}>         
      <CoreContainer>
        <PathWrapper>
          <Path><PathHome to={"/"}>Home</PathHome></Path> {'>'} <Path onClick={() => onClickAlert('www.com.lu/category')}>*Category*</Path> {'>'} <Path onClick={() => onClickAlert('www.com.lu/category/sub-category')}>*Sub-Category*</Path> {'>'} <CurrentPath>{robot ? robot.name : 'loading...'}</CurrentPath>
        </PathWrapper>
      </CoreContainer>
        <ImageTitleAndPanel>
          <TemplateImage url={robot.imageUrl} />
          <TitleAndHighlights>
            <div>
              <TemplateTitle>{robot.name}</TemplateTitle>
              <Manufacturer>by: <Path onClick={() => onClickAlert("Manufacturer produtcs")}>{robot.manufacturer}</Path></Manufacturer>
            </div>
            <TemplateHighlights>
              <HighlightsOverviewSpan>Highlights:</HighlightsOverviewSpan>
              <Highlight>{`- ${robot.highlight1}`}</Highlight>
              <Highlight>{`- ${robot.highlight2}`}</Highlight>
              <Highlight>{`- ${robot.highlight3}`}</Highlight>
              <Highlight>{`- ${robot.highlight4}`}</Highlight>
              <Highlight>{`- ${robot.highlight5}`}</Highlight>
            </TemplateHighlights>
          </TitleAndHighlights> 
          <PanelCentralizer>
            <Panel>
              <PriceAndStock>
                <Price>{`€${robot.price}`}</Price> 
                <Stock>{`${robot.quantity} in stock`}</Stock>
              </PriceAndStock>
              <Qty>
                <QtyText>Quantity:</QtyText>
                <QtyControls>
                  <ArrowButton onClick={() => onClickDecreaseAmount()}>
                    <ArrowDownwardIcon />
                  </ArrowButton>
                  <QtyAmount>{amount}</QtyAmount>
                  <ArrowButton onClick={() => onClickIncreaseAmount()}>
                    <ArrowUpwardIcon />
                  </ArrowButton>
                </QtyControls>
              </Qty> 
              <CartDiv>
                <CartButton onClick={() => alert(`Adds ${amount} item(s) to cart. Test different quantities.`)}>Add to Cart</CartButton>
              </CartDiv>       
            </Panel>
          </PanelCentralizer>         
        </ImageTitleAndPanel>
        <CoreContainer>
        <TemplateDescription>
          <HighlightsOverviewSpan>Overview:<br/></HighlightsOverviewSpan> 
          {` ${robot.overview}`}
        </TemplateDescription> 
        <Delete>
            <DeleteButton onClick={() => setShouldShow(true)}>Delete</DeleteButton>
            {shouldShow && (
              <ModalBackground onClick={() => setShouldShow(false)}>
                <ModalBody onClick={e => e.stopPropagation()}>
                  Are you sure you want to delete this product?
                  <Buttons>
                    <DeleteButton onClick={() => onClickDelete(id)}>Delete</DeleteButton>
                    <CancelButton onClick={() => setShouldShow(false)} >Cancel</CancelButton>
                  </Buttons>
                </ModalBody>
              </ModalBackground>
            )}
          </Delete>   
      </CoreContainer>
    </CoreBody>
    <Footer />
    </>
    ) : (
      <Centralizer>
        <RotatingIcon />
      </Centralizer>
    )}
    
    </>
  );
}