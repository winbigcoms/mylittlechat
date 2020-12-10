import React, { useRef } from 'react';

export default function LoginComponent({history}){
  const nickNameBox = useRef();

  const setNickName = e=>{
    localStorage.setItem("nickName",nickNameBox.current.value);
    history.push("/");
  }
  return(
    <form>
      <input type="text" placeholder="닉네임 입력" ref={nickNameBox}/>
      <button type="submit" onClick={setNickName}>접속!</button>
    </form>
  )
}