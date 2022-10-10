import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getRecipes } from "../../util/apiURL";
import RecipeCard from "../../pages/RecipeCard/RecipeCard";
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
      : recipes.filter(
          (recipe) => recipe.cookingstyle === cookingStyle.toLowerCase(),
        );

  console.log(cookingStyle, recipesByCookingStyle);

  return (
    <>
      <div className="RecipeTitle">
        <h1>{cookingStyle} Recipes</h1>
      </div>
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
