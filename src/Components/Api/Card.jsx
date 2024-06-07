import React from "react";

const Card = ({ name, email, website }) => {
  return (
    <div style={{ border: "3px solid purple", padding: "10px" }}>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h2>{website}</h2>
    </div>
  );
};

export default Card;
