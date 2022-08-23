import { useState, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import axios from "axios";


const API_BASE = apiURL();

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE}/recipe`)
      .then((res) => {
        const { payload } = res.data;
        setRecipes(payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Recipe Book</h1>
      {recipes.map((recipe, index) => {
        return (
          <div key={index}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <p>{recipe.instructions}</p>
          </div>
        );
      })}
    </div>
   
  );
}
