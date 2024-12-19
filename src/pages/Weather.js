import React, { useEffect, useState } from 'react'

const Weather = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
    };

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

    getLocation()
  }, [])

  //로딩 중일 때 처리
  if (loading) return <p>Loading...</p>;
  //api 값을 정상적으로 받아오지 못했을 때 
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Today's Weather</h1>
      <div>
        <p>온도 {weather.main.temp}°C</p>
        <p>날씨 {weather.weather[0].description}</p>
        <p>바람 세기 {weather.wind.speed} m/s</p>
        <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather-icon"
        />
      </div>
    </div>
  )
}

export default Weather