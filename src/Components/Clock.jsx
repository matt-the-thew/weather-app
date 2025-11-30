import React, { useState, useEffect } from "react";
import styles from "./Clock.module.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let year = time.getFullYear();
  let month = time.getMonth() + 1; //zero-indexed
  let day = time.getDate();

  year = year.toString();
  month = month.toString();
  day = day.toString().padStart(2, "0");
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;
  const dateString = `${month}.${day}.${year} `;

  useEffect(() => {
    const timerID = setInterval(() => clockTick(), 1000);

    //cleanup function for when component unmounts
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const clockTick = () => {
    setTime(new Date());
  };

  return (
    <div className={styles.clock}>
      <span className={styles.bracket}>[</span>
      {dateString}
      <span className={styles.bracket}>]</span>
      <span className={styles.bracket}>[</span>
      {timeString}
      <span className={styles.bracket}>]</span>
    </div>
  );
};

export default Clock;
