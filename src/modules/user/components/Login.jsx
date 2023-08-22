import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { apiClient } from '../../../shared/services/api-client';

export const Login = () => {
  const emailRef= useRef()
  const pwdRef= useRef()
  const [message, setMessage]= useState('')

  const doLogin= async ()=>{
    const userInfo= {
      'email': emailRef.current.value,
      'password': pwdRef.current.value,
    }
    try{
      const response= await apiClient.post(process.env.REACT_APP_LOGIN_URL,userInfo)
      setMessage(response.message)
      console.log(response)
      }
      catch(err){
        setMessage('Login Fail..')
        console.log('Error in login', err)
      }
  }
  return (
    <Container>
      <p>{message}</p>
        <TextField inputRef= {emailRef} id="outlined-basic" label="EMail" variant="outlined" />
        <TextField inputRef= {pwdRef} id="outlined-basic" type="password" label="Password" variant="outlined" />
        <Button onClick={doLogin} variant="contained">Login</Button>
    </Container>
  )
}
