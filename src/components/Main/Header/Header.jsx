import React, { useState } from "react";
import dishes from "../../../dishes.json";
import menuItems from "../../../menuItems.json";

function Header({
  handleSearch,
  setSearchedDishes,
  searchedDishes,
  setNoDishes,
  notFound,
  setNotFound,
  setActive,
  active
}) {
  const getTime = new Date();
  const day = getTime.getDay();
  const date = getTime.getDate();
  const month = getTime.getMonth();
  const year = getTime.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const filteredDishes = (menuItemValue) => {
    const newDishes = dishes.filter((itm) => {
      return itm.category.includes(menuItemValue);
    });

    if (newDishes.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    setSearchedDishes(newDishes);
  };

  const toggleActive = (menuItem) => {
    filteredDishes(menuItem.content);
    setNoDishes(false);
    setActive(menuItem.id === active ? null : menuItem.id);
  };
  return (
    <>
      <header>
        <div className="top">
          <div className="name">
            <h1>Jaegar Resto</h1>
            <p id="date">
              {days[day]}, {date} {months[month]} {year}
            </p>
          </div>
          <div className="search">
            <i className="ri-search-line" />
            <input
              type="text"
              placeholder="Search for food, coffe, etc.."
              id="input"
              onKeyDown={handleSearch}
            />
          </div>
        </div>
        <ul className="menu">
          {menuItems.map((menuItem) => {
            return (
              <li
                key={menuItem.id}
                value={menuItem.content}
                className={
                  menuItem.id === active ? (menuItem.class = "active") : ""
                }
                onClick={() => toggleActive(menuItem)}>
                {menuItem.content}
              </li>
            );
          })} 
        </ul>
      </header>
      <h1 className={notFound ? "notFound active" : "notFound"}>
        No Results Found :(
      </h1>
    </>
  );
}

export default Header;
