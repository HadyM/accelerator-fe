import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../../util/apiURL";
import axios from "axios";

import RecipeDetails from "../RecipeDetails/RecipeDetails";

import "./RecipeDetail.scss";

const API_BASE = apiURL();

const RecipeDetail = () => {
  const [recipes, setRecipes] = useState([]);

  let params = useParams();
  let recipeId = params.id;

  useEffect(() => {
    axios
      .get(`${API_BASE}/recipe/${recipeId}`)
      .then((res) => {
        const { payload } = res.data;
        setRecipes(payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [recipeId]);

  return (
    <div className="RecipeDetail">
      <h1>Recipe Details</h1>
      <section>
        <RecipeDetails recipe={recipes} />
      </section>
    </div>
  );
};

export default RecipeDetail;
