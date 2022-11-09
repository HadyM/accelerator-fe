import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./SearchBar.scss";

const SearchBar = ({ recipes, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(recipes);

    const resultsArray = recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        recipe.time.includes(e.target.value),
    );

    setSearchResults(resultsArray);
  };

  return (
    <header>
      <form className="Search" onSubmit={handleSubmit}>
        <input
          className="SearchInput"
          placeholder="Search For Some Amazing Recipes...."
          type="text"
          id="search"
          onChange={handleSearchChange}
        />
        <button className="SearchButton">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
