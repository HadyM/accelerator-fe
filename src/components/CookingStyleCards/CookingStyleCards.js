import { useState, useEffect } from "react";
import { getCookingStyles } from "../../util/apiURL";
import CookingStyleCard from "../CookingStyleCard/CookingStyleCard";
import Loader from "react-loaders";

import "./CookingStyleCards.scss";

const CookingStyleCards = () => {
  const [cookingstyles, setCookingStyles] = useState([]);

  useEffect(() => {
    getCookingStyles()
      .then((response) => {
        setCookingStyles(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="CookingStyleTitle">
        <h1>Recipes Based On Cooking Style</h1>
      </div>
      <div className="CookingStylePage">
        {cookingstyles.map((cookingstyle, index) => {
          return <CookingStyleCard cookingstyle={cookingstyle} key={index} />;
        })}
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default CookingStyleCards;
