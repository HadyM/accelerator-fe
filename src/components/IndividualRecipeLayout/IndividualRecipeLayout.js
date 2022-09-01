import { useNavigate } from "react-router-dom";

import "./IndividualRecipeLayout.scss";

const RecipeDetails = ({ recipe }) => {
  let navigate = useNavigate();
  let recipeInstructions = recipe.instructions?.split(/\s(?=Step)/gi);
  let recipeIngredients = recipe.ingredients?.split(",");

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate("/recipes");
  };

  return (
    <>
      <div className="IndividualRecipeLayout">
        <div>
          <button onClick={handleGoBack}>Back to Recipes</button>
          <div className="TitleImage">
            <h1>{recipe.title}</h1>
          </div>
          <div>
            <img src={recipe.image} alt="recipepicture" />
          </div>
          <div>
            <h3>{recipe.description}</h3>
          </div>
          <div>
            <h3>Total Cook Time: {recipe.time}</h3>
          </div>
        </div>
        <div className="Ingredients">
          {recipeIngredients?.map((ingredients, index) => {
            return (
              <ul key={index}>
                <h4>{ingredients}</h4>
              </ul>
            );
          })}
        </div>
        <div className="Instructions">
          {recipeInstructions?.map((instructions, index) => {
            return (
              <ul key={index}>
                <h4>{instructions}</h4>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
