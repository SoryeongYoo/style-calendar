import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Calendar from 'react-calendar';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate(); //페이지 이동

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    const formattedDate = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD 형식으로 변환
    navigate(`/calendar/${formattedDate}`); // 해당 날짜의 상세 페이지로 이동
  };

  return (
    <HomeContainer>
      {/* HEADER */}
      <HomeHeader>
        <Title to="/">Style Calendar</Title>
        {/* Button */}
        <Button>
          <StyledLink to="/Mypage">mypage</StyledLink>
        </Button>
        <Description>Plan Your Outfits Effortlessly !</Description>
      </HomeHeader>

      {/* BODY */}
      <HomeBody>
        <CalendarContainer>
          <StyledCalendar onChange={handleDateChange} value={date} />
          <SelectedDateContainer>
            <SelectedDateText>{date.toDateString()}</SelectedDateText>
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

const HomeContainer = styled.body`
  position:relative;
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

    &:hover {
      background:rgb(163, 205, 148);
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

const SelectedDateText = styled.p`
  font-weight: bold;
  color: #333;
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