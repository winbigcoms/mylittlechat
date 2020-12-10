import React from 'react';

export default function RoomsComponent({roomList,moveRoom}){

  const roomClick = e=>{
    if(!e.target.matches("button"))return;
    moveRoom(e.target.id);
  }

  return(
    <div>
      <ul onClick={roomClick}>
        {roomList.map(room=>{
          return(
            <li>
              <button id={room}>
                {room}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}