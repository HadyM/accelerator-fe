import { useState, useEffect } from "react";
import { getKnives } from "../../util/apiURL";
import KnivesCard from "../../pages/KnivesCard/KnivesCard";
import Loader from "react-loaders";

import "./KnivesCards.scss";

const KnivesCards = () => {
  const [knives, setKnives] = useState([]);

  useEffect(() => {
    getKnives()
      .then((response) => {
        setKnives(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="KnivesPage">
        {knives.map((knife, index) => {
          return <KnivesCard knife={knife} key={index} />;
        })}
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default KnivesCards;
