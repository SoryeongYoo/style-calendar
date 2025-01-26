import React from 'react'
import { Link } from 'react-router-dom';
import Weather from './Weather';
import { styled } from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      {/* HEADER */}
      <HomeHeader>
        <Title to="/">Style Calendar</Title>
        {/* Button */}
        <Button>
          <StyledLink to="/login">login/join</StyledLink>
        </Button>
        <Description>Plan Your Outfits Effortlessly !</Description>
      </HomeHeader>

      {/* BODY */}
      <HomeBody>
        {/* 로그인 전 날씨 api */}
        <Weather></Weather>
      </HomeBody>

      {/* FOOTER
      <HomeFooter>

      </HomeFooter> */}
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.body`
  background-image: url('/images/homebackground.jpg');
`

/*HEADER*/
const HomeHeader = styled.header` 
  position: relative;
  width: 1200px;
  height: 87px;
  left:50%;
  transform: translate(-50%);
  margin-top: 49px;
  border-bottom: 2px solid #3a3a3a;
`

const Title = styled(Link)`
  font-family:'Jacques Francois', sans-serif;
  font-size: 40px;
  width: 271px;
  height: 53px;
  text-decoration: none;
  color:#3a3a3a;
  position: absolute; 
  left:50%;
  transform: translate(-50%);
`

const Button = styled.div`
  position: absolute;
  font-size: 16px;
  left:1110px;
  top: 53px;
  margin: 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color:#3a3a3a;
  font-family:'Jacques Francois', sans-serif;

  &:hover{
    text-decoration: underline;
  }
`

const Description = styled.p`
  font-family: 'Jacques Francois', sans-serif;
  color: #3a3a3a;
  font-size: 16px;
  position:absolute;
  left:50%;
  top:53px;
  transform: translate(-50%);
  margin:0;
`

// BODY 
const HomeBody = styled.div`

`
// FOOTER
const HomeFooter = styled.div`
  position:absolute;
  border-top: 1px solid #3a3a3a;
  width: 1200px;
  height: 21px;
  left: 50%;
  top: 100px;
  transform:translate(-50%);
`