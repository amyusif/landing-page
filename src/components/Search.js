import React from "react";

const Search = ({ searchFil }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Robots.........."
        onChange={searchFil}
      />
    </div>
  );
};

export default Search;
