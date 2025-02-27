import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {styled} from 'styled-components';
import FileUpload from './FileUpload';

const DateDetailPage = () => {
  const { date } = useParams(); // URL에서 날짜 가져오기
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Outfit Plan for {date}</Title>
      <p>여기에 선택한 날짜의 스타일 정보를 표시할 수 있습니다.</p>
      <FileUpload selecteDate={date}></FileUpload>
      <BackButton onClick={() => navigate('/calendar')}>Back to Calendar</BackButton>
    </Container>
  )
}

export default DateDetailPage

/**/
const Container = styled.div`
  text-align: center;
  margin: 20px;
`

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`