import React, { useEffect, useState } from 'react';
import RoomsComponent from '../../component/RoomsComponent/RoomsComponent';
export default function RoomsContainer({socket}){
  const [roomList,setRoomList] = useState([]);
  useEffect(()=>{

  },[]);
  
  const moveRoom = roomName => {
  }

  <RoomsComponent roomList={roomList} moveRoom={moveRoom}/>
}