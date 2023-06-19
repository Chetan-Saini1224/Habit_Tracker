import React from 'react'
import styles from "./Previous.module.css";
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../..';
import Week from "../Week/index";
import { changePreviousStatus } from '../../Actions';

const PreviouDays = () => {
  const [PreviousDays,setPreviousDays] = useState({});
  const store = useContext(StoreContext);
  
  useEffect(()=>{
    const {previousDays} = store.getState();
    setPreviousDays(previousDays);
  },[]);

  function changeStatus(status,day,habitName)
  {
    store.dispatch(changePreviousStatus(status,day,habitName));
  }

  return (
    <main>
    {Object.keys(PreviousDays).map((val,idx) => {
      return <Week key={idx} habitName={val} changeStatus={changeStatus} week={PreviousDays[val]} /> 
      })}  
    </main>
  )
}

export default PreviouDays