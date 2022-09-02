import { useState, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import CookingStyleCard from "../CookingStyleCard/CookingStyleCard";
import axios from "axios";
import Loader from "react-loaders";

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
      <div className="CookingStylePage">
        {cookingstyles.map((cookingstyle, index) => {
          return <CookingStyleCard cookingstyle={cookingstyle} key={index} />;
        })}
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default CookingStyleCards;