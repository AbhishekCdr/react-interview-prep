import React, { useEffect, useState } from "react";
import Card from "./Card";

const DataFetch = () => {
  const [data, setData] = useState([]);
  //state variabe to store fetched data
  useEffect(() => {
    async function fetchData() {
      const url = "https://jsonplaceholder.typicode.com/users/";
      const response = await fetch(url);
      const data = await response.json();
      //fetching data from api
      setData(data);
      console.log(data);
    }

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 400px)",
        gap: "10px",
      }}
    >
      {data.map((user) => {
        return <Card {...user} />;
      })}
    </div>
  );
};

export default DataFetch;
