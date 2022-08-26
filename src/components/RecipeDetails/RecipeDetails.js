// import {
//   useEffect,
//   useState,
//   useMemo,
//   useCallback,
//   useLayoutEffect,
//   useRef,
// } from "react";
import { useNavigate } from "react-router-dom";

import "./RecipeDetails.scss";

const RecipeDetails = ({ recipe }) => {
  let navigate = useNavigate();
  // use to add a handle delete later on...

//   let [recipeInstructions, setRecipeInstructions] = useState(
//     recipe.instructions,
//   );
//   //   useEffect(() => {
//   //     setRecipeInstructions(recipe.instructions.split(/\s(?=Step)/gi));
//   //   }, [recipe.instructions, setRecipeInstructions]);
//   useEffect(() => {
//     setRecipeInstructions(recipe.instructions.split(/\s(?=Step)/gi));
//   });

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate("/recipes");
  };

  return (
    <>
      <div className="RecipeDetails">
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

        {/* {recipeInstructions.map((recipe) => {
          return <ul>{recipe}</ul>;
        })} */}

        <div>
          <button onClick={handleGoBack}>Back to Recipes</button>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
