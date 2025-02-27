import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { createGlobalStyle, styled } from 'styled-components';
import Calendar from 'react-calendar';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig.js';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate(); //페이지 이동

  const handleDateChange = (selectedDate) => {
    if (!selectedDate) {
      console.log("x");
      return;
    }
    setDate(selectedDate);
    const formattedDate = selectedDate.toLocaleDateString(); // YYYY-MM-DD 형식으로 변환
    navigate(`/calendar/${formattedDate}`); // 해당 날짜의 상세 페이지로 이동
  };

  const handleLogout = async ()=>{
    await signOut(auth)
    alert("로그아웃 되었습니다.")
    navigate('/')
  }


  return (
    <HomeContainer>
      <GlobalStyle />
      {/* HEADER */}
      <HomeHeader>
        <Title to="/calendar">Style Calendar</Title>
        {/* Button */}
        <Button>
          <StyledLink to="/Mypage">mypage</StyledLink>
          <StyledLink onClick={handleLogout}>logout</StyledLink>
        </Button>
        <Description>Plan Your Outfits Effortlessly !</Description>
      </HomeHeader>

      {/* BODY */}
      <HomeBody>
        <CalendarContainer>
          <StyledCalendar onChange={handleDateChange} value={date} />
          <SelectedDateContainer>
          </SelectedDateContainer>
        </CalendarContainer>
      </HomeBody>

      {/* FOOTER
      <HomeFooter>

      </HomeFooter> */}
    </HomeContainer>
  )
}

export default CalendarPage

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('/images/homebackground.jpg');
  }
`

const HomeContainer = styled.div`
  position:relative;
  
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
  width: 1200px;
  padding: 0 20px 10px 20px;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: right;
  bottom: 0;
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
  position:absolute;
  font-family: 'Jacques Francois', sans-serif;
  color: #3a3a3a;
  font-size: 16px;
  box-sizing: border-box;
  left:50%;
  transform: translate(-50%);
  padding: 0 0 10px 0;
  display: flex;
  justify-content: center;
  margin:0;
  bottom: 0;
`

/*BODY*/
const HomeBody = styled.div`
  position: absolute;
  width: 1200px;
  height: 769px;
  top: 87px;
  left: 50%;
  transform: translate(-50%);
`

/*CALENDAR*/
const CalendarContainer = styled.div`
  text-align: center;
  margin: 20px;
`

const StyledCalendar = styled(Calendar)`
  @font-face {
      font-family: 'PeoplefirstILTTF';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2501-1@1.1/PeoplefirstILTTF.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }
  max-width: 1500px;
  margin: 20px auto;
  border: none;
  padding: 10px;
  
  //날짜 타일 기본 스타일
  .react-calendar__tile {
    transition: background 0.3s;
    height: 150px;
    display: flex;
    justify-content: left;
    background: transparent;

    &:hover {
      background:rgb(163, 205, 148);
      cursor: pointer;
    }
  }

  .react-calendar__navigation__label{
    border: none;
    font-family: 'PeoplefirstILTTF', sans-serif;
    background: transparent;

    &:hover {
      cursor: pointer;
      color: rgba(4, 50, 231, 0.67);
    }
  }
  
  abbr{
    font-family: 'PeoplefirstILTTF', sans-serif;
    text-decoration: none;
  }
  
  .react-calendar__navigation__arrow{
    border:none;
    background: transparent;

    &:hover {
      cursor: pointer;
      color: rgb(157, 172, 233);
    }
  }

  //선택된 날짜 스타일
  .react-calendar__tile--active {
    
  }
`
const SelectedDateContainer = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
`

/*FOOTER*/
const HomeFooter = styled.div`
  position:absolute;
  border-top: 1px solid #3a3a3a;
  width: 1200px;
  height: 21px;
  left: 50%;
  top: 100px;
  transform:translate(-50%);
`