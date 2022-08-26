import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import RecipeCards from "./components/RecipeCard/RecipeCard";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";

import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="/recipes" element={<RecipeCards />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
