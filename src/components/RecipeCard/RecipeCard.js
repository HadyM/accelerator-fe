import { useState, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import RecipeCards from "../RecipeCards/RecipeCards";
import axios from "axios";

import "./RecipeCard.scss";

const API_BASE = apiURL();

const RecipeCard = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE}/recipe`)
      .then((res) => {
        const { payload } = res.data;
        setRecipes(payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="RecipePage">
      {recipes.map((recipe, index) => {
        return <RecipeCards recipe={recipe} key={index} />;
      })}
    </div>
  );
};

export default RecipeCard;
