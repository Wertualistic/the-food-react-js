import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { useState, useEffect } from "react";
import dishes from "./dishes.json";
import menuItems from "./menuItems.json";

function App() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const [searchedDishes, setSearchedDishes] = useState(dishes);
  const [noDishes, setNoDishes] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [number, setNumber] = useState(products.length);
  const [active, setActive] = useState(1);

  const handleDelete = (id) => {
    const removedItemIndex = products.findIndex((item) => item.id === id);

    if (removedItemIndex !== -1) {
      products.splice(removedItemIndex, 1);
      localStorage.setItem("products", JSON.stringify(products));
      setNumber(products.length);
    }
  };
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setActive(1);
      const searchValue = e.target.value.toLowerCase();
      menuItems[0].class = "active";
      menuItems[1].class = "";
      menuItems[2].class = "";
      menuItems[3].class = "";
      menuItems[4].class = "";
      menuItems[5].class = "";
      const filteredDishes = dishes.filter((dish) =>
        dish.title.toLowerCase().includes(searchValue)
      );
      setNotFound(false);
      if (filteredDishes.length === 0) {
        setSearchedDishes([]);
        setNoDishes(true);
      } else {
        setSearchedDishes(filteredDishes);
        setNoDishes(false);
      }
      e.target.value = "";
    }
  };

  return (
    <div className="container">
      <Sidebar
        number={number}
        products={products}
        handleDelete={handleDelete}
      />
      <Main
        products={products}
        setNumber={setNumber}
        handleSearch={handleSearch}
        active={active}
        setActive={setActive}
        searchedDishes={searchedDishes}
        setNoDishes={setNoDishes}
        noDishes={noDishes}
        setSearchedDishes={setSearchedDishes}
        notFound={notFound}
        setNotFound={setNotFound}
      />
    </div>
  );
}

export default App;
