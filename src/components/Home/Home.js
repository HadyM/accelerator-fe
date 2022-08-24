import { useState, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import RecipeCard from "../RecipeCard/RecipeCard";
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
        <RecipeCard recipe={recipe} key={index}/>
        );
      })}
      <div>Testing Web Hook</div>
    </div>
  );
}
