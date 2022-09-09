import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getRecipeId } from "../../util/apiURL";
import Loader from "react-loaders";

import ComponentToPrint from "../IndividualRecipeLayout/ComponentToPrint/ComponentToPrint";
import IndividualRecipeLayout from "../IndividualRecipeLayout/IndividualRecipeLayout";

import "./IndividualRecipe.scss";

const IndividualRecipe = () => {
  let location = useLocation();
  const [recipe, setRecipe] = useState(location.state?.recipe || {});

  let params = useParams();
  let recipeId = params.id;

  const fetchRecipe = () => {
    getRecipeId()
      .then((response) => {
        setRecipe(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (Object.keys(recipe).length === 0) {
      fetchRecipe(recipeId);
    }
  }, [recipe, recipeId]);

  return (
    <>
      <div className="IndividualRecipe">
        <section>
          <IndividualRecipeLayout recipe={recipe} />
          <div>
            <ComponentToPrint recipe={recipe} />
          </div>
        </section>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default IndividualRecipe;
