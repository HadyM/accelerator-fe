import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ComponentToPrint = ({ recipe }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  let recipeInstructions = recipe.instructions?.split(/\s(?=Step)/gi);
  let recipeIngredients = recipe.ingredients?.split(",");

  return (
    <>
      <div style={{ display: "none" }}>
        <div ref={componentRef}>
          <div>
            <h1>{recipe.title}</h1>
          </div>
          <div>
            <h3>{recipe.description}</h3>
          </div>
          <div>
            <h3>Total Cook Time: {recipe.time}</h3>
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
      </div>
      <div>
        <button onClick={handlePrint}>Print this out!</button>
      </div>
    </>
  );
};

export default ComponentToPrint;
