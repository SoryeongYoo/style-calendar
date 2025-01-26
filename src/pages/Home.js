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
        <HeaderLine></HeaderLine>
      </HomeHeader>

      {/* BODY */}
      <HomeBody>
        
        {/* 로그인 전 날씨 api */}
        <Weather></Weather>

      </HomeBody>

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
`

const Title = styled(Link)`
  font-family:'Jacques Francois', sans-serif;
  font-size: 2em;
  font-weight:bold;
  text-decoration: none;
  color:#3a3a3a;
  position: absolute; 
  left:50%;
  top: 40px;
  transform: translate(-50%,-50%);
`

const Button = styled.div`
  position: absolute;
  font-size: 16px;
  left:85%;
  margin: 0;
  padding: 30px;
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
  font-size: 14px;
  position:absolute;
  left:50%;
  top: 70px;
  transform: translate(-50%);
  margin:0;
`

const HeaderLine=styled.div`
  position:absolute;
  border: 1px solid;
  width: 1300px;
  color: #3a3a3a;
  left: 50%;
  top: 100px;
  transform:translate(-50%);
`

const HomeBody = styled.div`

`