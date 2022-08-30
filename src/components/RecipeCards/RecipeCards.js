import { useState, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import RecipeCard from "../RecipeCard/RecipeCard";
import axios from "axios";

import "./RecipeCards.scss";

const API_BASE = apiURL();

const RecipeCards = () => {
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
    <>
      <div className="RecipePage">
        {recipes.map((recipe, index) => {
          return <RecipeCard recipe={recipe} key={index} />;
        })}
      </div>
    </>
  );
};

export default RecipeCards;
