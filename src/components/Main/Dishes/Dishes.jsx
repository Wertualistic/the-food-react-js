import React from "react";
import DishesList from "./DishesList/DishesList";

function Dishes({
  products,
  setNumber,
  searchedDishes,
  setNoDishes,
  noDishes,
}) {
  return (
    <div className="column">
      <DishesList
        products={products}
        setNumber={setNumber}
        searchedDishes={searchedDishes}
        setNoDishes={setNoDishes}
        noDishes={noDishes}
      />
    </div>
  );
}

export default Dishes;
