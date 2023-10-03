import React, { useState } from "react";
import DishesItem from "../DishesItem/DishesItem";

function DishesList({ products, setNumber, searchedDishes, noDishes }) {
  const [arrowActive, setArrowActive] = useState(false);
  const [handleChanger, setHandleChanger] = useState("Prices");

  const handleSort1 = () => {
    setHandleChanger("A - Z");

    searchedDishes.sort((a, b) => {
      const titleA = a.title;
      const titleB = b.title;
      return titleA.localeCompare(titleB);
    });
  };

  const handleSort2 = () => {
    setHandleChanger("Z - A");

    searchedDishes.sort((a, b) => {
      const titleA = a.title;
      const titleB = b.title;
      return titleB.localeCompare(titleA);
    });
  };

  const handleSort3 = () => {
    setHandleChanger("Prices");

    searchedDishes.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return priceA - priceB;
    });
  };

  return (
    <>
      <div className="top">
        <h2>Choose Dishes</h2>
        <div
          className="dropdown items"
          id="dropdown"
          onClick={() => setArrowActive(!arrowActive)}>
          <i
            className={
              arrowActive
                ? "ri-arrow-down-s-line transform"
                : "ri-arrow-down-s-line"
            }
            id="arrow"
          />
          <h3 id="default">{handleChanger}</h3>
          <div
            className={arrowActive ? "dropdown open close" : "dropdown open"}
            id="dropdownopen">
            <h3 className="changer" onClick={() => handleSort1()}>
              A - Z
            </h3>
            <h3 className="changer" onClick={() => handleSort2()}>
              Z - A
            </h3>
            <h3 className="changer" onClick={() => handleSort3()}>
              Prices
            </h3>
          </div>
        </div>
      </div>
      <div className="dishes">
        {noDishes ? (
          <>
            <h1 className="notFound active">No Results Found :(</h1>
          </>
        ) : (
          searchedDishes.map((dish) => {
            return (
              <DishesItem
                dish={dish}
                key={dish.id}
                products={products}
                setNumber={setNumber}
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default DishesList;
