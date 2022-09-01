import { useState, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import CookingStyleCard from "../CookingStyleCard/CookingStyleCard";
import axios from "axios";

import "./CookingStyleCards.scss";

const API_BASE = apiURL();

const CookingStyleCards = () => {
  const [cookingstyles, setCookingStyles] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE}/cookingstyles`)
      .then((res) => {
        const { payload } = res.data;
        setCookingStyles(payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="RecipePage">
        {cookingstyles.map((cookingstyle, index) => {
          return <CookingStyleCard cookingstyle={cookingstyle} key={index} />;
        })}
      </div>
    </>
  );
};

export default CookingStyleCards;
