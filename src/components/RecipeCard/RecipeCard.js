const RecipeCard = ({ recipe }) => {
  let recipeInstructions = recipe.instructions.split(/\s(?=Step)/gi);

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      {recipeInstructions.map((recipe) => {
        return <ul>{recipe}</ul>
      })}
    </div>
  );
};

export default RecipeCard;


