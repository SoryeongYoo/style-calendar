import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebaseConfig'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Join = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()
  const auth = getAuth()

  const handleJoin = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
      setError("비밀번호가 일치하지 않습니다.")
      return
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      alert("회원가입 성공")
      navigate('/login')
      
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <JoinContainer>
      <Title>Join</Title>
      <JoinForm onSubmit={handleJoin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your password'
        />
        <label htmlFor="password">Password 확인</label>
        <input
          type='password'
          id='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Enter your password'
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <JoinButton type='submit'>Join</JoinButton>
      </JoinForm>

    </JoinContainer>
  )
}

export default Join

const JoinContainer = styled.div`

`
const Title = styled.h1`

`
const JoinForm = styled.form`

`

const ErrorMessage = styled.p`
`

const JoinButton = styled.button`
`
