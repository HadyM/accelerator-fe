import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import "./ComponentToPrint.scss";

const ComponentToPrint = ({ recipe }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  let recipeInstructions = recipe.instructions?.split(/\s(?=Step)/gi);
  let recipeIngredients = recipe.ingredients?.split(",");

  return (
    <>
      <div className="RecipePrint">
        <div ref={componentRef}>
          <div style={{ textAlign: "center" }}>
            <h1>{recipe.title}</h1>
          </div>
          <div
            className="PrintTime"
            style={{ display: "flex", gap: "10px", marginLeft: "30px" }}
          >
            <h2>Total Cook Time: </h2>
            <h2>{recipe.time}</h2>
          </div>
          <div className="PrintIngredients">
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              Ingredients:
            </h2>
            <div
              className="PrintIngredientsList"
              style={{ columnCount: "3", columnGap: "10px", margin: "20px" }}
            >
              <h3>
                {recipeIngredients?.map((ingredients, index) => {
                  return (
                    <ul key={index}>
                      <h4>{ingredients}</h4>
                    </ul>
                  );
                })}
              </h3>
            </div>
          </div>
          <div className="PrintInstructions">
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              Instructions:
            </h2>
            <div
              className="PrintInstructionsList"
              style={{ marginRight: "20px" }}
            >
              <h3>
                {recipeInstructions?.map((instructions, index) => {
                  return (
                    <ul key={index}>
                      <h4>{instructions}</h4>
                    </ul>
                  );
                })}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="PrintButton">
        <button onClick={handlePrint}>Print Recipe!</button>
      </div>
    </>
  );
};

export default ComponentToPrint;
