import React from "react";
import RecipeCard from "../../../pages/RecipeCard/RecipeCard";
import "./ListSearchRecipes.scss";

const ListSearchRecipes = ({ searchResults }) => {
  const results = searchResults.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  const content =
    results?.length && results !== "" ? (
      results
    ) : (
      <div className="NoResults">
        <h1>No Matching Recipes! Please Try Again.</h1>
      </div>
    );

  return <main className="RecipeCardList">{content}</main>;
};

export default ListSearchRecipes;
