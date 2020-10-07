import React from "react";
import Card from "./CardMaker";

const CharacterCards = (props) => {
  const { characterCard, cards } = props;

  return (
    <div className="card-wrapper">
      {cards.map((cardObj) => {
        return <Card card={cardObj} key={cardObj.id} />;
      })}
    </div>
  );
};

export default CharacterCards;
