import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import RecipeCards from "./components/RecipeCards/RecipeCards";
import IndividualRecipe from "./components/IndividualRecipe/IndividualRecipe";
import CookingStyleCards from "./components/CookingStyleCards/CookingStyleCards";
import CuttingStyleCards from "./components/CuttingStyleCards/CuttingStyleCards";
import KnivesCards from "./components/KnivesCards/KnivesCards";
import PotsAndPansCards from "./components/PotsAndPansCards/PotsAndPansCards";

import NewRecipe from "./pages/NewRecipe/NewRecipe";
import EditRecipe from "./pages/EditRecipe/EditRecipe";

import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="/recipes" element={<RecipeCards />} />
          <Route path="/recipes/:id" element={<IndividualRecipe />} />
          <Route path="/recipes/:id/updaterecipe" element={<EditRecipe />} />
          <Route exact path="/recipes/newrecipe" element={<NewRecipe />} />
          <Route exact path="/cookingstyles" element={<CookingStyleCards />} />
          <Route exact path="/cuttingstyles" element={<CuttingStyleCards />} />
          <Route exact path="/knives" element={<KnivesCards />} />
          <Route exact path="/potsandpans" element={<PotsAndPansCards />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
