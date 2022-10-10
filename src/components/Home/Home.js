import { getRecipes } from "../../util/apiURL";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ListSearchRecipes from "./ListSearchRecipes/ListSearchRecipes";
import Loader from "react-loaders";

import "./Home.scss";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getRecipes().then((response) => {
      setRecipes(response);
      setSearchResults(response);
    });
  }, []);

  return (
    <>
      <div>
        <SearchBar recipes={recipes} setSearchResults={setSearchResults} />
        <ListSearchRecipes searchResults={searchResults} />
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default Home;
