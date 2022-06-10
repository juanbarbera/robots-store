import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { TopBar } from '../components/TopBar';
import { Footer } from '../components/Footer';
import { DesktopMenu } from '../components/DesktopMenu';
import { CoreContainer, CoreBody } from '../style';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

const Title = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-size: 1.35em;
  @media (min-width: 821px) {
    padding-top: 5vh;
  }
`;

const SellInput = styled(TextField)`
  && {
    width: 100%;
    margin-top: 2vh;
    background-color: white;
    form: {
      autocomplete: 'off';
    }
  }
`;

const PriceInput = styled(FormControl)`
  && {
    width: 100%;
    margin-top: 2vh;
    background-color: white;
  }
`;

const Centralizer = styled.div`
  height: 2vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8vh 0 10vh;
  @media (min-width: 820px) {
    height: 10vh;
  }
`;

const SellButton = styled(Button)`
  && {
    width: 40%;
    height: 50px;
    color: white;
    background-color: #4D51C4;
    transition: all .3s;
    :hover {
      color: white;
      background-color: #4D51C4;
      color: #BCB1FF;
    }
  }
`;

export const SellForm = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [price, setPrice] = useState();
  const [imageUrl, setImageUrl] = useState('');
  const [quantity, setQuantity] = useState();
  const [highlight1, setHighlight1] = useState();
  const [highlight2, setHighlight2] = useState();
  const [highlight3, setHighlight3] = useState();
  const [highlight4, setHighlight4] = useState();
  const [highlight5, setHighlight5] = useState();
  const [overview, setOverview] = useState();

  const history = useNavigate();

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
  },[]); 
  
  const onClickToggle = () => {
    setOpen(!open);
  }

  const onClickPost = () => {
    const robot = {
      name: name,
      manufacturer: manufacturer,
      price: price,
      isAvailable: true,
      imageUrl: imageUrl,
      quantity: quantity,
      highlight1: highlight1,
      highlight2: highlight2,
      highlight3: highlight3,
      highlight4: highlight4,
      highlight5: highlight5,
      overview: overview
    };   
    axios.post('/api/robots/add', robot)
      .then(alert('successfuly sent robot to database!'))
      .catch(err => console.log(`Error: ${err}`));

    history('/products')
  }

  return (
    <>
    { isMobile ? (
      <>
      <TopBar open={open} setOpen={setOpen} onClickToggle={onClickToggle}/>
      </>
    ) : (
      <DesktopMenu/>
    )}
    <CoreBody>
      <CoreContainer>
        <Title>Sell your Robot</Title>
        <SellInput
        id="name"
        label="Name"
        variant="outlined"
        value={name}
        onChange={e => setName(e.target.value)} />
        <SellInput 
          id="manufacturer"
          label="Manufacturer"
          variant="outlined"
          value={manufacturer}
          onChange={e => setManufacturer(e.target.value)} />
        <PriceInput>
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={price}
            onChange={e => setPrice(e.target.value)}
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
            label="Amount" />
        </PriceInput>
        <SellInput 
          id="image-url"
          label="Image Url"
          variant="outlined"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)} />
        <SellInput 
          id="quantity"
          label="Quantity"
          variant="outlined"
          value={quantity}
          onChange={e => setQuantity(e.target.value)} />
        <SellInput 
        id="highlight1"
        label="Highlight 1"
        variant="outlined"
        value={highlight1}
        multiline
        onChange={e => setHighlight1(e.target.value)} />
        <SellInput 
        id="highlight2"
        label="Highlight 2"
        variant="outlined"
        value={highlight2}
        multiline
        onChange={e => setHighlight2(e.target.value)} />
        <SellInput 
        id="highlight3"
        label="Highlight 3"
        variant="outlined"
        value={highlight3}
        multiline
        onChange={e => setHighlight3(e.target.value)} />
        <SellInput 
        id="highlight4"
        label="Highlight 4"
        variant="outlined"
        value={highlight4}
        multiline
        onChange={e => setHighlight4(e.target.value)} />
        <SellInput 
        id="highlight5"
        label="Highlight 5"
        variant="outlined"
        value={highlight5}
        multiline
        onChange={e => setHighlight5(e.target.value)} />
        <SellInput 
        id="overview"
        label="Overview"
        variant="outlined"
        value={overview}
        multiline
        onChange={e => setOverview(e.target.value)} /> 
        <Centralizer>
          <SellButton onClick={() => onClickPost()}>Sell</SellButton> 
        </Centralizer>        
      </CoreContainer>
    </CoreBody>
    <Footer /> 
    </>
  )
}