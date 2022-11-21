import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getRecipeId, deleteRecipe } from "../../util/apiURL";
import Loader from "react-loaders";

import ComponentToPrint from "./IndividualRecipeLayout/ComponentToPrint/ComponentToPrint";
import IndividualRecipeLayout from "./IndividualRecipeLayout/IndividualRecipeLayout";

import "./IndividualRecipe.scss";

const IndividualRecipe = () => {
  let location = useLocation();
  const [recipe, setRecipe] = useState(location.state?.recipe || {});

  let params = useParams();
  let recipeId = params.id;

  const fetchRecipe = (recipeId) => {
    getRecipeId(recipeId)
      .then((response) => {
        setRecipe(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteIndividualRecipe = (id) => {
    deleteRecipe(id).then(
      (response) => {
        setRecipe(response);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  useEffect(() => {
    if (Object.keys(recipe).length === 0) {
      fetchRecipe(recipeId);
    }
  }, [recipe, recipeId]);

  return (
    <>
      <div className="IndividualRecipe">
        <section>
          <div>
            <ComponentToPrint recipe={recipe} />
          </div>
          <IndividualRecipeLayout
            id={recipeId}
            recipe={recipe}
            deleteIndividualRecipe={deleteIndividualRecipe}
          />
        </section>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default IndividualRecipe;
