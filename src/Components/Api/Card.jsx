import React from "react";

const Card = (props) => {
  const { name, email, website, id } = props;

  return (
    <div
      key={id}
      id={id}
      style={{ border: "3px solid purple", padding: "10px" }}
    >
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h2>{website}</h2>
    </div>
  );
};

export default Card;
