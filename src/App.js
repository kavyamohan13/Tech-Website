import React from "react";
import Headlines from "./Headlines";
import Pagination from "./Pagination";
import Search from "./Search";
import "./App.css";

const App = () => {
  return (
    <>
      <Search />
      <Pagination />
      <Headlines />
    </>
  );
};

export default App;
