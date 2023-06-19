import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from "./Board.module.css";
import { StoreContext } from '../..';
import { addHabits,changeStatus } from '../../Actions';
import Habit from '../Habit';

const HabitBoard = () => {
  const store = useContext(StoreContext); 
  const [habits,setHabits] = useState([]);
  const habbit = useRef();

  
  function AddHabit(event)
  {
      if (event.key && event.key != 'Enter') return;
      let curr = habbit.current.value;
      habbit.current.value = "";
      if(!curr) return;
      const id = Date.now() + Math.random();
      store.dispatch(addHabits(id,curr));
  }


  function habitStatus(e,id){
    let habbit = habits.find((val) => val.id == id);
    store.dispatch(changeStatus(e.target.value,habbit.habit));
  }


  useEffect(() => {
    document.addEventListener('keyup',AddHabit); 

     store.subscribe(() =>{
        const {habits:habit} = store.getState();
        setHabits(habit);
     });

     const {habits:habit} = store.getState();
     setHabits(habit);
  },[]);

  return (
    <main>
      <div className={styles.addContainer}>
        <input type='text' ref={habbit} placeholder='Add new habit' />
        <span className={styles.addIcon} onClick={(e) => AddHabit(e)}>
          <img src="https://cdn-icons-png.flaticon.com/128/4210/4210903.png" alt='ADD_ICON' />
        </span>
      </div>
        
      <div>
        {habits.map((val) => <Habit key={val.id}  habit={val} habitStatus={habitStatus} /> )}
      </div>

    </main>
  )
}

export default HabitBoard;