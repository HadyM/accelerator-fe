import { useState, useEffect } from "react";
import { getRecipes } from "../../util/apiURL";
import RecipeCard from "../RecipeCard/RecipeCard";
import Loader from "react-loaders";

import "./RecipeCards.scss";

const RecipeCards = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes()
      .then((response) => {
        setRecipes(response);
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
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default RecipeCards;
