import { useEffect, useState } from "react";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <h1>{formattTime(count)}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button
          onClick={() => {
            setCount(30);
          }}
        >
          30sec
        </button>
        <button
          onClick={() => {
            setCount(60);
          }}
        >
          1min
        </button>
        <button
          onClick={() => {
            setCount(120);
          }}
        >
          2min
        </button>
      </div>
    </div>
  );
}

export default CountDown;
