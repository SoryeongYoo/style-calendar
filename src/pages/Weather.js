import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const Weather = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [clothingSuggetion, setClothingSuggestion] = useState('')
  const [clothing, setClothing] = useState()

  const API_KEY = 'd871577fb0306dcaf9c2e88ec14bfac2'

  useEffect(() => {
    // 위치 정보 가져오기
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (error) => {
            setError('Unable to retrieve your location');
            setLoading(false);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser');
        setLoading(false);
      }
    }

    const fetchWeather = async (latitude, longitude) => {
      try {
        // 로딩 중
        setLoading(true);
        // 날씨 api 받아오기
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        )

        // 에러 처리
        if (!response.ok) {
          throw new Error('Failed to fetch weather')
        }

        const data = await response.json()
        setWeather(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    //날씨에 맞는 옷 추천
    const generateClothingSuggestion = (data) => {
      const temp = data.main.temp //현재 온도
      const weatherCondition = data.weather[0].main.toLowerCase() //날씨 상태 문자 반환

      let suggestion = ''
      let clothSuggestion = ''

      if (temp > 25) {
        suggestion = '오늘은 가벼운 옷 어떨까요?'
        //---추천 옷 img 랜덤 추가---//
      } else if (temp >= 15) {
        suggestion = '오늘은 가벼운 아우터를 걸치는게 좋겠어요!'
        //---추천 옷 img 랜덤 추가---//
      } else if (temp >= 5) {
        suggestion = '감기 걸리지 않게 따뜻하게 입고 가세요!'
        //---추천 옷 img 랜덤 추가---//
      } else {
        suggestion = '준비 단단히 하고 나가시는게 좋겠어요! 장갑, 목도리 챙기세요!'
        //---추천 옷 img 랜덤 추가---//
      }

      if (weatherCondition.includes('rain') || weatherCondition.includes('snow')) {
        suggestion += '장화, 우산 잊지 마세요!'
        //---장화 등등 img 랜덤 추가---//
      }

      setClothingSuggestion(suggestion)
      //setClothing()
    }

    getLocation()
  }, [])


  const letters = "LOADING...".split("");
  const totalLetters = letters.length;

  //로딩 중일 때 처리
  if (loading) return (
    <LoadingContainer>
      <LoadingText>
        {letters.map((letter, index) => (
          <Span key={index} style={{ transform: `rotate(${(360 / totalLetters) * index}deg)` }}>
            {letter}
          </Span>
        ))}
      </LoadingText>
    </LoadingContainer>
  )

  //api 값을 정상적으로 받아오지 못했을 때 
  if (error) return <p>Error: {error}</p>;
  return (
    <Main>
      <Title>Today's<br />Weather</Title>
      <Content>
        <p>온도 {weather.main.temp}°C</p>
        <p>날씨 {weather.weather[0].main}</p>
        <p>바람 세기 {weather.wind.speed} m/s</p>
      </Content>
    </Main>
  )
}

export default Weather

const Main = styled.div`
  position: absolute;
  width:461px;
  height:303px;
  top: 71px;
`

const Title = styled.div`
  font-family:'Aboreto', sans-serif;
  font-size: 24px;
  text-align:center;
  position:absolute;
  top: 29px;
  left: 170px;
`

const Content = styled.div`
   font-family:'Aboreto', sans-serif;
   display: flex;
   gap: 20px;
   width: auto;
   height: auto;
   justify-content: center;
   align-items: center;
`

/*LOADING*/
const LoadingContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const rotateText = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }      
`

const LoadingText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #3a3a3a;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: right;
  animation: ${rotateText} 4s linear infinite;
`

const Span = styled.span`
  position: absolute;
  transform-origin: center 50px; /* 중심에서 떨어진 지점 기준 */
`