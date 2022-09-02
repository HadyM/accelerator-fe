import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { apiURL } from "../../util/apiURL";
import axios from "axios";
import Loader from "react-loaders";

import IndividualCookingStyleLayout from "../IndividualCookingStyleLayout/IndividualCookingStyleLayout";

import "./IndividualCookingStyle.scss";

const API_BASE = apiURL();

const IndividualCookingStyle = () => {
  let location = useLocation();
  const [cookingstyle, setCookingStyle] = useState(
    location.state?.cookingstyle || {},
  );

  let params = useParams();
  let cookingStyleId = params.id;

  const fetchCookingStyle = (cookingStyleId) => {
    axios
      .get(`${API_BASE}/cookingstyles/${cookingStyleId}`)
      .then((res) => {
        const { payload } = res.data;
        setCookingStyle(payload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (Object.keys(cookingstyle).length === 0) {
      fetchCookingStyle(cookingStyleId);
    }
  }, [cookingstyle, cookingStyleId]);

  return (
    <>
      <div className="IndividualCookingStyle">
        <section>
          <IndividualCookingStyleLayout cookingstyle={cookingstyle} />
        </section>
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default IndividualCookingStyle;
