import React from "react";
import Header from "./Header/Header";
import Dishes from "./Dishes/Dishes";

function Main({
  products,
  setNumber,
  handleSearch,
  setNoDishes,
  noDishes,
  setSearchedDishes,
  searchedDishes,
  notFound,
  setNotFound,
  active,
  setActive
}) {
  return (
    <main>
      <Header
        handleSearch={handleSearch}
        setSearchedDishes={setSearchedDishes}
        searchedDishes={searchedDishes}
        setNoDishes={setNoDishes}
        noDishes={noDishes}
        setNotFound={setNotFound}
        notFound={notFound}
        active={active}
        setActive={setActive}
      />
      <Dishes
        products={products}
        setNumber={setNumber}
        searchedDishes={searchedDishes}
        setNoDishes={setNoDishes}
        noDishes={noDishes}
      />
    </main>
  );
}

export default Main;
