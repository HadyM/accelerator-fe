import { Link } from "react-router-dom";

import "./RecipeCards.scss";

const RecipeCards = ({ recipe }) => {
  //   let recipeInstructions = recipe.instructions.split(/\s(?=Step)/gi);

  return (
    <>
      <div className="RecipeCards">
        <div className="RecipeLayout">
          <h2>{recipe.title}</h2>
          <Link to={`/recipes/${recipe?.id}`}>
            <img src={recipe.image} alt="recipepicture" />
          </Link>
          <h3>{recipe.description}</h3>
          <p>Time: {recipe.time}</p>
          {/* {recipeInstructions.map((recipe) => {
        return <ul>{recipe}</ul>;
      })} */}
        </div>
      </div>
    </>
  );
};
export default RecipeCards;
