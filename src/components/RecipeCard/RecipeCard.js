import { Link } from "react-router-dom";

import "./RecipeCard.scss";

const RecipeCard = ({ recipe }) => {
  return (
    <>
      <div className="RecipeCard">
        <div className="RecipeLayout">
          <Link to={`/recipes/${recipe?.id}`} state={{ recipe: recipe }}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt="recipepicture" />
            <h3>{recipe.description}</h3>
            <p>Time: {recipe.time}</p>
          </Link>
        </div>
      </div>
    </>
  );
};
export default RecipeCard;
