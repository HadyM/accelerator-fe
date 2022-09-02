import { useState, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import RecipeCard from "../RecipeCard/RecipeCard";
import axios from "axios";
import Loader from "react-loaders";

import "./RecipeCards.scss";

const API_BASE = apiURL();

const RecipeCards = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE}/recipes`)
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
      <Loader type="cube-transition" />
    </>
  );
};

export default RecipeCards;
