import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from './firebaseConfig'
import styled from 'styled-components'

const Join = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleJoin = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      alert("회원가입 성공")
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
