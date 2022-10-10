import React from "react";

import "./PotsAndPansCard.scss";

const PotsAndPansCard = ({ potandpan }) => {
  return (
    <>
      <div className="PotsAndPansCard">
        <div className="PotsAndPansLayout">
          <h2>{potandpan.name}</h2>
          <img src={potandpan.image} alt="knifepicture" />
          <h3>{potandpan.description}</h3>
        </div>
      </div>
    </>
  );
};

export default PotsAndPansCard;
