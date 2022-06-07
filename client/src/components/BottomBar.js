import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import texture from '../assets/images/texture.jpg';

const Background = styled.div`
  height: 7.5vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  /* background-image: url(${texture}); */
  /* background-size: cover;
  background-position: 50% 48%; */
  background-color: #4D51C4;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-family: 'Anek Devanagari', sans-serif;
`;

const Items = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const CustomHomeIcon = styled(HomeIcon)`
  && {
    vertical-align: text-bottom;
    font-size: 1.5em;
  } 
`;

const ItemText = styled.div`
  margin-top: 1vh;
`;

export const BottomBar = () => {
  return (
    <Background>
      <Items>
        <CustomLink to="/">
          <CustomHomeIcon />
        </CustomLink>        
      </Items>
      <Items>
        <CustomLink to="/products">
          <ItemText>Products</ItemText>
        </CustomLink>        
      </Items>
      <Items>
        <CustomLink to="/sell">
          <ItemText>Sell</ItemText>
        </CustomLink>        
      </Items>
    </Background>
  )
}