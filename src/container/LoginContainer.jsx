import React from 'react';
import LoginComponent from '../component/LoginComponent';

export default function LoginContainer({history}){
  return(
    <LoginComponent history={history}/>
  )
}