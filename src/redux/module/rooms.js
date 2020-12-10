import { put, takeEvery } from "redux-saga/effects";

const { createActions, handleActions } = require("redux-actions");

const prefix = "chat/rooms";

const initState=[];
//action
const {start,getRoom}= createActions(
  {
    GETROOM:roomsArry=>(roomsArry)
  },
  "START",
  {
    prefix
  }
);

const rooms = handleActions(
  {
    START:(rooms)=>(rooms),
    GETROOM:(rooms,action)=>({
      gettedRooms:action.payload.rooms
    }),
  },
  initState,{
    prefix
  }
)
export default rooms;

const GET_ROOMS_START = 'GET_ROOMS_START';

export const getRoomsData = (rooms)=>({
  type:GET_ROOMS_START,
  payload:{
    rooms
  }
})

function* getRoomsDataSaga(action){
  const {rooms} = action.payload;
  yield put(start());
  yield put(getRoom(rooms));
}

export function* getRoomSaga(){
  yield takeEvery(GET_ROOMS_START,getRoomsDataSaga);
}