import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

const API_BASE = process.env.REACT_APP_API_SITE;

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    let URL = "https://recipe-book-backend-app.herokuapp.com/recipe";

    fetch(URL)
      .then((res) => res.json())

      .then((data) => setRecipes(data.payload));
  }, []);

  return (
    <div className="App">
      <h1>Awesome New Front End App</h1>
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
