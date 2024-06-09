import { useEffect, useState } from "react";
import Image from "./Image";

function Crowsel() {
  const [state, setState] = useState([]);

  const [view, setView] = useState(0);
  const [image, setImage] = useState({});

  useEffect(() => {
    const api = "https://picsum.photos/v2/list";
    async function fetchPics(url) {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setState(data);
    }

    fetchPics(api);
  }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     setImage(state[view]);
  //     setView((old) => old + 1);
  //   }, 4000);
  // }, []);

  function rightClickHandler() {
    setImage(state[view]);
    setView((old) => old + 1);
  }

  console.log(view);
  console.log(image);

  function leftClickHandler() {
    if (view > 0) {
      setView((old) => old - 1);
      setImage(state[view]);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100svh",
        gap: "10px",
      }}
    >
      <div>
        <button onClick={leftClickHandler}>
          <img src="src\Components\Crowsel\images\left.svg" alt="left" />
        </button>
      </div>

      <Image {...image} />

      <div>
        <button onClick={rightClickHandler}>
          <img src="src\Components\Crowsel\images\right.svg" alt="right" />
        </button>
      </div>
    </div>
  );
}

export default Crowsel;
