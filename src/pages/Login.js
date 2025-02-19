import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebaseConfig'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate(); //네비게이터 생성

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('')
    setLoading(true)

    //유효성 검사
    if (!email || !password) {
      setError('이메일 또는 비밀번호를 입력하세요.');
      return;
    }

    try{
      await createUserWithEmailAndPassword(auth, email, password);
      alert('로그인 성공')
      navigate('/calendar'); //로그인 성공 후 calender 화면으로 이동
    } catch(err){
      console.error('Login failed:', err)
      setError(err.response?.data?.message || 'Login failed. Please try again.')
    }finally{
      setLoading(false)
    }
  }

  return (
    <LoginContainer>
      <Title>Login</Title>
      <LoginForm onSubmit={handleLogin}>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <input 
            type='password'
            id='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Enter your password'
          />
        </FormGroup>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginButton type='submit'>Login</LoginButton>
      </LoginForm>

    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`

`
const Title = styled.h1`

`
const LoginForm = styled.form`

`

const FormGroup = styled.div`
`

const ErrorMessage=styled.p`
`

const LoginButton=styled.button`
`