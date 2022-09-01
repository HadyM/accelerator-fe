import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import RecipeCards from "./components/RecipeCards/RecipeCards";
import IndividualRecipe from "./components/IndividualRecipe/IndividualRecipe";
import CookingStyleCards from "./components/CookingStyleCards/CookingStyleCards";

import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="/recipes" element={<RecipeCards />} />
          <Route path="/recipes/:id" element={<IndividualRecipe />} />
          <Route exact path="/cookingstyles" element={<CookingStyleCards />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
