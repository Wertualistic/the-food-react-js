import React, { useEffect, useState } from "react";

function DishesItem({ dish, products, setNumber }) {
  const [alertB, setAlert] = useState(false);
  const saveToLocalStorage = (dish) => {
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 1000);
    const existingItemIndex = products.findIndex((item) => item.id === dish.id);
    if (existingItemIndex !== -1) {
      if (
        products[existingItemIndex].countable >
        products[existingItemIndex].available
      ) {
        alert("oshib ketdi");
      } else {
        products[existingItemIndex].countable++;
      }
    } else {
      products.push(dish);
    }

    setNumber(products.length);
    localStorage.setItem("products", JSON.stringify(products));

    return <></>;
  };

  return (
    <>
      <div className="dish">
        <img src={dish.img} alt="" />
        <div className="text">
          <h4 className="title">{dish.title}</h4>
          <h4 className="price">{dish.price} $</h4>
          <h4 className="isHave">{dish.available} Bowls available</h4>
        </div>
        <button className="cardBtn" onClick={() => saveToLocalStorage(dish)}>
          Add
        </button>
      </div>
      <div className="alertB">
        <div className={alertB ? "alert active" : "alert"}>{dish.title} added to the cart</div>
      </div>
    </>
  );
}

export default DishesItem;
