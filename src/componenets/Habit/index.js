import React from 'react'
import styles from "./habit.module.css";
import { useEffect,useState } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../..';
import deleteIcon from "../../Icons/deleteIcon.png";
import { deleteHabit } from '../../Actions';



const Habit = (props) => {
  const store = useContext(StoreContext);
  const {habit,habitStatus} = props;
  const [selectedOption, setSelectedOption] = useState();
  
  function DeleteHabit(id,name){
    console.log(id);
    store.dispatch(deleteHabit(id,name));
  }

  useEffect(() => {
      const {previousDays}  = store.getState();
      const status = previousDays[habit.habit][6];
      setSelectedOption(status);
  },[]); 
 
  return (
    <div className={styles.habitDiv}>
      <h3>{habit.habit}</h3>
      <span>Today's Status : </span>
      <select value={selectedOption} onChange={(e) =>{
         setSelectedOption(e.target.value);
         habitStatus(e,habit.id)
      }}>
        <option value="no action">No action</option>
        <option value="done">Done</option>
        <option value="Not done">Not done</option>
      </select>
        <span className={styles.deleteIcon} onClick={() => DeleteHabit(habit.id,habit.habit)}>
          <img src={deleteIcon} alt='DELETE_ICON' />
        </span>
    </div>
  )
}

export default Habit;