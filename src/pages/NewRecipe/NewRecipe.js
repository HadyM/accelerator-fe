import React from "react";
import NewRecipeForm from "../../components/NewRecipeForm/NewRecipeForm";

import "./NewRecipe.scss";

const NewRecipe = () => {
  return (
    <div className="NewForm">
      <h1>Add A Delicious Recipe</h1>
      <NewRecipeForm />
    </div>
  );
};

export default NewRecipe;
