import React from "react";

import "./KnivesCard.scss";

const KnivesCard = ({ knife }) => {
  return (
    <>
      <div className="KnivesCard">
        <div className="KnivesLayout">
          <h2>{knife.name}</h2>
          <img src={knife.image} alt="knifepicture" />
          <h3>{knife.description}</h3>
        </div>
      </div>
    </>
  );
};

export default KnivesCard;
