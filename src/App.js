import React, { useState } from "react";
import { robots } from "./components/4.2 robots";
import CardList from "./components/CardList";
import Search from "./components/Search";

const App = () => {
  const [search, setSearch] = useState("");

  const searchRobots = (e) => {
    setSearch(e.target.value);

    console.log(Search);
  };

  const filterRobots = robots.filter((robots) => {
    return (
      robots.name.toLowerCase().includes(search.toLowerCase()) ||
      robots.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <h1>ROBOFRIENDS</h1>
      <Search searchFil={searchRobots} />
      <div className="card">
        <CardList robots={filterRobots} />
      </div>
    </>
  );
};

export default App;
