import React from "react";
import Loader from "react-loaders";
import EditRecipeForm from "../../components/EditRecipeForm/EditRecipeForm";

import "./EditRecipe.scss";

const EditRecipe = () => {
  return (
    <>
      <div className="UpdateRecipe">
        <h1>Update Recipe</h1>
        <EditRecipeForm />
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default EditRecipe;
