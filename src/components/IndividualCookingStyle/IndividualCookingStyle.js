import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getCookingStyleId } from "../../util/apiURL";
import Loader from "react-loaders";

import IndividualCookingStyleLayout from "../IndividualCookingStyleLayout/IndividualCookingStyleLayout";

import "./IndividualCookingStyle.scss";

const IndividualCookingStyle = () => {
  let location = useLocation();
  const [cookingstyle, setCookingStyle] = useState(
    location.state?.cookingstyle || {},
  );

  let params = useParams();
  let cookingStyleId = params.id;

  const fetchCookingStyle = () => {
    getCookingStyleId()
      .then((response) => {
        setCookingStyle(response);
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
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default IndividualCookingStyle;
