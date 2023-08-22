import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { apiClient } from '../../../shared/services/api-client';

export const Register= () => {
  const emailRef= useRef()
  const pwdRef= useRef()
  const nameRef= useRef()
  const phoneRef= useRef()

  const [message, setMessage]= useState('')

  const doRegister= async ()  =>{
    const userInfo= {
      'email': emailRef.current.value,
      'password': pwdRef.current.value,
      'name': nameRef.current.value,
      'phone': phoneRef.current.value,
    }
    try{
    const response= await apiClient.post(process.env.REACT_APP_REGISTER_URL,userInfo)
    setMessage(response.message)
    console.log('Response is ', response)
    console.log('User Info ', userInfo)
    }
    catch(err){
      setMessage('Register Fail..')
      console.log('Error is ', err)
    }
  }

  return (
    <Container>
      <p>{message}</p>
        <TextField inputRef= {emailRef} id="outlined-basic" label="EMail" variant="outlined" />
        <TextField inputRef= {pwdRef} id="outlined-basic" type="password" label="Password" variant="outlined" />
        <TextField inputRef= {nameRef} id="outlined-basic" label="Name" variant="outlined" />
        <TextField inputRef= {phoneRef} id="outlined-basic" label="Phone" variant="outlined" />
        <Button onClick={doRegister} variant="contained">Register Yourself</Button>
    </Container>
  )
}