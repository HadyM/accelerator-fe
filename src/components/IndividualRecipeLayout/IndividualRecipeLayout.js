import { useNavigate } from "react-router-dom";

import "./IndividualRecipeLayout.scss";

const RecipeDetails = ({ recipe }) => {
  let navigate = useNavigate();
  let recipeInstructions = recipe.instructions?.split(/\s(?=Step)/gi);

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate("/recipes");
  };

  return (
    <>
      <div className="IndividualRecipeLayout">
        <div>
          <h2>{recipe.title}</h2>
        </div>
        <div>
          <img src={recipe.image} alt="recipepicture" />
        </div>
        <div>
          <h3>{recipe.description}</h3>
        </div>
        <div>
          <p>Total Cook Time: {recipe.time}</p>
        </div>
        <div>
          <h3>{recipe.ingredients}</h3>
        </div>
        <div>
          {recipeInstructions?.map((recipe, index) => {
            return <ul key={index}>{recipe}</ul>;
          })}
        </div>
        <div>
          <button onClick={handleGoBack}>Back to Recipes</button>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
