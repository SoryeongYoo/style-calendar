import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CalendarPage from 'react-calendar'

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectDate) => {
    setDate(selectDate)
    console.log('날짜를 선택하세요: ', selectDate)
  }

  return (
    <HomeContainer>
      {/* HEADER */}
      <HomeHeader>

        <Title to="/">Style Calendar</Title>
        {/* Button */}


      </HomeHeader>

      <Description>Plan Your Outfits Effortlessly !</Description>
      
      <CalendarPage
        onChange={handleDateChange}
        value={date}
      />
      <SelectDate>
        
      </SelectDate>
    </HomeContainer>
  )
}

export default Calendar

const HomeContainer = styled.body`
  background-color: #cfcfc1;
`
const HomeHeader = styled.header` 
  position: relative;
  margin:20px;
  padding:20px;
`

const Title = styled(Link)`
  text-decoration: none;
  color:black;
  position: absolute;
  font-size:2em;
  font-weight:bold;
  top:0;
  left:50%;
  transform: translateX(-50%);
  margin:0;
`

const Description = styled.p`
  text-align:center;
`

const SelectDate=styled.div`

`