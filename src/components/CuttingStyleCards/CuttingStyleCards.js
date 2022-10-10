import { useState, useEffect } from "react";
import { getCuttingStyles } from "../../util/apiURL";
import CuttingStyleCard from "../../pages/CuttingStyleCard/CuttingStyleCard";
import Loader from "react-loaders";

import "./CuttingStyleCards.scss";

const CuttingStyleCards = () => {
  const [cuttingstyles, setCuttingStyles] = useState([]);

  useEffect(() => {
    getCuttingStyles()
      .then((response) => {
        setCuttingStyles(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="CuttingStylePage">
        {cuttingstyles.map((cuttingstyle, index) => {
          return <CuttingStyleCard cuttingstyle={cuttingstyle} key={index} />;
        })}
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default CuttingStyleCards;
