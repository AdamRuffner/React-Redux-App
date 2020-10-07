import React from "react";

const Card = (props) => {
  const { card, setCard } = props;

  return (
    <div className="card">
      <h1> {props.results.name}</h1>
      <div className="card-image-wrapper">
        <img
          alt="Picture of Character"
          className="card-image"
          src={props.results.image}
        />
      </div>
    </div>
  );
};

export default Card;
