import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getRecipes } from "../../util/apiURL";
import RecipeCard from "../RecipeCard/RecipeCard";
import Loader from "react-loaders";

import "./RecipeCards.scss";

const RecipeCards = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  let cookingStyle = searchParams.get("cookingstyle") || "All";
  // console.log(searchParams.get("cookingstyle"));

  useEffect(() => {
    getRecipes()
      .then((response) => {
        setRecipes(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let recipesByCookingStyle =
    cookingStyle === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.cookingStyle === cookingStyle);

  return (
    <>
      <h3>{cookingStyle} Recipes</h3>
      <div className="RecipePage">
        {recipesByCookingStyle.map((recipe, index) => {
          return <RecipeCard recipe={recipe} key={index} />;
        })}
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default RecipeCards;
