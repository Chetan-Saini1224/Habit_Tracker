import React, { useEffect, useState } from 'react';
import styles from "./weekBoard.module.css";


const Index = ({habitName,week,changeStatus}) => 
{
const [selectedOption,setSelectedOption] = useState('');
const [Week,setWeek] = useState(week);
function getLastSevenDates() {
  var dates = [];
  var today = new Date(); // Get the current date
  var options = { day: 'numeric', month: 'short', year: 'numeric' };

  for (var i = 0; i < 7; i++) 
  {
    var date = new Date(today); 
    date.setDate(today.getDate() - i); 

    var formattedDate = date.toLocaleDateString('en-GB', options); // Format the date as "dd MMM yyyy"
    dates.push(formattedDate); // Push the formatted date to the array
  }
  return dates.reverse();
}

let dates = getLastSevenDates();

useEffect(()=>{
  
},[]);

  return (<div className={styles.container}>
  <h3>{habitName}</h3>
    <div className={styles.week}>
      {Week.map((val,idx) => <div className={styles.day} key={idx} >
      <small>{dates[idx]}</small>
      <select value={val} className={styles.list} onChange={(e) =>{
         Week[idx] = e.target.value;
         setWeek([...Week]);
         changeStatus(e.target.value,idx,habitName)
      }}>
        <option value="no action">No action</option>
        <option value="done">Done</option>
        <option value="Not done">Not done</option>
      </select>
      </div>)}
    </div>
  </div>)
}

export default Index