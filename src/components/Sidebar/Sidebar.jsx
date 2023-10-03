import React, { useState } from "react";
import Funtions from "../AllContent/Funtions/Funtions";
import Orders from "../AllContent/Orders/Orders";
import Account from "../AllContent/Account/Account";


function Sidebar({ number, products, handleDelete }) {
  const [active, setActive] = useState(2);
  const [activeAll, setAllActive] = useState(false);
  const [activeInfo, setInfoActive] = useState(false);
  const [activeOrd, setOrdActive] = useState(false);
  const [activePay, setPayActive] = useState(false);

  const sidebarItems = [
    {
      id: 1,
      content: (
        <a href="/#">
          <i className="ri-menu-line" />
        </a>
      ),
      component: (
        <Funtions
          activeInfo={activeInfo}
          setInfoActive={setInfoActive}
          activeOrd={activeOrd}
          setOrdActive={setOrdActive}
          setActive={setActive}
          setAllActive={setAllActive}
        />
      ),
      componentName: "div functions",
    },
    {
      id: 2,
      content: (
        <a href="/#">
          <i className="ri-home-2-line" />
        </a>
      ),
      component: null,
      componentName: "sidebarNo",
    },
    {
      id: 3,
      content: (
        <a href="/#">
          <i className="ri-percent-line" />
        </a>
      ),
      component: null,
      componentName: "sidebarNo",
    },
    {
      id: 4,
      content: (
        <a href="/#">
          <i className="ri-pie-chart-2-line" />
        </a>
      ),
      component: null,
      componentName: "sidebarNo",
    },
    {
      id: 5,
      content: (
        <a href="/#">
          <i className="ri-mail-line" />
        </a>
      ),
      component: null,
      componentName: "sidebarNo",
    },
    {
      id: 6,
      content: (
        <a href="/#">
          <i className="ri-notification-2-line" />
        </a>
      ),
      component: "",
      componentName: "sidebarNo",
    },
    {
      id: 7,
      content: (
        <a href="/#">
          <i className="ri-shopping-cart-2-line" />
          <p className="number">{number}</p>
        </a>
      ),
      component: (
        <Orders
          products={products}
          handleDelete={handleDelete}
          setPayActive={setPayActive}
          activePay={activePay}
          setActive={setActive}
          setAllActive={setAllActive}
        />
      ),
      componentName: "div orders",
    },
    {
      id: 8,
      content: (
        <a href="/#">
          <i className="ri-account-circle-line" />
        </a>
      ),
      component: (
        <Account
          setInfoActive={setInfoActive}
          setOrdActive={setOrdActive}
          activeOrd={activeOrd}
          setActive={setActive}
          setAllActive={setAllActive}
        />
      ),
      componentName: "div account",
    },
  ];

  const toggleActive = (item) => {
    setAllActive(true);
    setActive(item.id === active ? null : item.id);
    if (item.id === active) {
      setAllActive(false);
    }
    setInfoActive(false);
    setOrdActive(false);
    setPayActive(false);
    if (item.componentName === "sidebarNo") {
      setAllActive(false);
    }
  };

  return (
    <div className="BIG">
      <ul className="sidebar">
        {sidebarItems.map((item) => {
          return (
            <li
              key={item.id}
              className={item.id === active ? "active" : ""}
              onClick={() => toggleActive(item)}>
              {item.content}
            </li>
          );
        })}
      </ul>
      <div id="all" className={activeAll ? "active" : ""} >
        {sidebarItems.map((item) => {
          return (
            <div
              key={item.id}
              className={
                item.id === active
                  ? `div ${item.componentName} active`
                  : item.componentName
              }>
              {item.component}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;