import React from 'react'
import { Link } from 'react-router-dom';
import Weather from './Weather';
import { styled } from 'styled-components';
/* FONT */
// import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
// import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200..900&display=swap');

// .home_header .wrap h1 {
//   font-family: "Source Code Pro", serif;
// }

// .home_header p {
//   font-family: "Indie Flower", serif;
// }

const Home = () => {
  return (
    <HomeContainer>
      {/* HEADER */}
      <HomeHeader>

        <Title>Style Calendar</Title>

        {/* Button */}
        <Button>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/join">Join</StyledLink>
        </Button>

      </HomeHeader>

      <Description>Plan Your Outfits Effortlessly !</Description>

      {/* 로그인 전 날씨 api */}
      <Weather></Weather>

    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.body`
  background-color: #cfcfc1;
`

const HomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  flex-grow: 1;
  text-align: center;
  margin-bottom:1px;
`

const Button = styled.div`
  display:flex;
  gap:10px
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color:black;
  margin: 20px;
  margin-bottom:1px;

  &:hover{
    text-decoration: underline;
  }
`

const Description = styled.p`
  text-align:center;
  margin-top: 1px;
`