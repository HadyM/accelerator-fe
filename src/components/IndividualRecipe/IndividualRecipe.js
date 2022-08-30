import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { apiURL } from "../../util/apiURL";
import axios from "axios";

import IndividualRecipeLayout from "../IndividualRecipeLayout/IndividualRecipeLayout";

import "./IndividualRecipe.scss";

const API_BASE = apiURL();

const RecipeDetail = () => {
  let location = useLocation();
  const [recipe, setRecipe] = useState(location.state?.recipe || {});

  let params = useParams();
  let recipeId = params.id;

  const fetchRecipe = (recipeId) => {
    axios
      .get(`${API_BASE}/recipe/${recipeId}`)
      .then((res) => {
        const { payload } = res.data;
        setRecipe(payload);
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
    <div className="IndividualRecipe">
      <h1>Recipe Details</h1>
      <section>
        <IndividualRecipeLayout recipe={recipe} />
      </section>
    </div>
  );
};

export default RecipeDetail;
