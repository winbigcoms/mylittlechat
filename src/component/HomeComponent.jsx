import React from 'react';
import RoomsContainer from '../container/RoomsConatiner/RoomsContainer';

export default function HomeComponent({socket}){
  return(
    <>
      <RoomsContainer socket={socket}/>
      <section></section>
      <section></section>
    </>
  )
}