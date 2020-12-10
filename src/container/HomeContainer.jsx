import React from 'react';
import HomeComponent from '../component/HomeComponent';

export default function HomeContainer({history}){
  // db가 없으니 로컬스토리지에 닉넴없으면 로그인페이지로
  // 강제 이동
  const nickName = localStorage.getItem("nickName");
  if(nickName)history.push("/login");
  //있으면 닉네임으로 join

  return (
    <HomeComponent />
  )
}