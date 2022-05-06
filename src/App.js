import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { apiURL } from "./util/apiURL";
import axios from "axios";

import "./App.css";

// const API_BASE = process.env.REACT_APP_API_SITE;
const API_BASE = apiURL();

function App() {
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
    <div className="App">
      <h1>Recipe Book</h1>
      {recipes.map((recipe, index) => {
        return (
          <div key={index}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
