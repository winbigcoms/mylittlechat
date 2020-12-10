import io from 'socket.io';

const socket = io("http://localhost:8000");
export function login(nickName){
  socket.emit("join",nickName);
}

export function getRooms(){
  socket.on("roomList",data=>{
    return [...data];
  })
}

export function changeRoom(roomName){
  socket.emit("changeRoom",roomName);
}
