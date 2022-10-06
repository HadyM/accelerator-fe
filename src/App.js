import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import RecipeCards from "./components/RecipeCards/RecipeCards";
import IndividualRecipe from "./components/IndividualRecipe/IndividualRecipe";
import CookingStyleCards from "./components/CookingStyleCards/CookingStyleCards";
import CuttingStyleCards from "./components/CuttingStyleCards/CuttingStyleCards";
import KnivesCards from "./components/KnivesCards/KnivesCards";

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
          <Route exact path="/cuttingstyles" element={<CuttingStyleCards />} />
          <Route exact path="/knives" element={<KnivesCards />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
