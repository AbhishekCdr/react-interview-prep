import { useEffect, useState } from "react";
import styles from "./CountDown.module.css";

function CountDown() {
  const [count, setCount] = useState(0);
  //   const [time, setTime] = useState(0);

  useEffect(() => {
    if (count === 0) {
      return;
    }

    console.log("start of code");

    const id = setInterval(() => {
      setCount((old) => old - 1);
    }, 1000);

    console.log("end of code");

    return () => {
      //clear inetrval every 1sec
      clearInterval(id);
    };
  }, [count]);

  function formattTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  return (
    <div className={styles.main}>
      <h1 style={count < 10 ? { color: "red" } : { color: "black" }}>
        {formattTime(count)}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button
          className={styles.btn}
          onClick={() => {
            setCount(30);
          }}
        >
          30sec
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            setCount(60);
          }}
        >
          1min
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            setCount(120);
          }}
        >
          2min
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            setCount(0);
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default CountDown;
