import React, { useState } from "react";
import breakfast from "../../../assets/images/breakfast.png";
import Payment from "../Payment/Payment";

function Orders({
  products,
  handleDelete,
  setPayActive,
  activePay,
  setActive,
  setAllActive,
}) {
  const [btnActive, setBtnActive] = useState(null);
  const [defaults, setDefault] = useState("Dine In");
  let [count, setCount] = useState();
  let [price, setPrice] = useState();
  let [subTotal, setSubTotal] = useState(0);

  const counterMinus = (product) => {
    
    count = product.countable;
    price = product.amount;
    setCount(product.countable--);
    setPrice((product.amount -= product.price));
    setCount(product.countable - 1);
    if (product.countable <= 0) {
      product.countable = 1;
      product.amount = product.price;
    }

    localStorage.setItem("products", JSON.stringify(products));
  };

  const counterPlus = (product) => {
    if (product.countable > product.available) {
      alert("Oshib ketdi");
      product.countable = product.available;
      product.amount = product.price * count;
    } else {
      count = product.countable;
      price = product.amount;
      setCount(product.countable++);
      setPrice((product.amount += product.price));
      setSubTotal(products.reduce((total, product) => total + (product.price * product.countable), 0));
    }

    localStorage.setItem("products", JSON.stringify(products));
  };

  const payment = () => {
    setActive(true);
    setPayActive(true);
    setAllActive(true);
  };

  const closePage = () => {
    setActive(false);
    setAllActive(false);
    setPayActive(false);
  };

  const handleClick = () => {
    setActive(false);
    setAllActive(false);
  };

  const buttons = [
    {
      id: 1,
      title: "Dine In",
    },
    {
      id: 2,
      title: "To Go",
    },
    {
      id: 3,
      title: "Delivery",
    },
  ];

  const handleButton = (button) => {
    setBtnActive(button.id === btnActive ? null : button.id);
    setDefault(button.title);
  };

  return (
    <>
      {products.length ? (
        <div className="allOrders">
          <h2 className="title">
            <i
              className="ri-arrow-left-line removeModals"
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            />
            Orders #34562
          </h2>
          <div className="btns1">
            {buttons.map((button) => {
              return (
                <button
                  key={button.id}
                  className={btnActive === button.id ? "active" : ""}
                  onClick={() => handleButton(button)}>
                  {button.title}
                </button>
              );
            })}
          </div>
          <div className="qty">
            <p>Item</p>
            <div className="qty1">
              <p>Qty</p>
              <p>Price</p>
            </div>
          </div>
          <div className="ordersList">
            {products.map((product) => {
              return (
                <div className="order" key={product.id}>
                  <div className="top">
                    <div className="order__left">
                      <img src={product.img} alt="" />
                      <div className="counter">
                        <button onClick={() => counterMinus(product)}>
                          <i className="ri-subtract-fill"></i>
                        </button>
                        <span className="num">{product.countable}</span>
                        <button onClick={() => counterPlus(product)}>
                          <i className="ri-add-fill"></i>
                        </button>
                      </div>
                    </div>
                    <div className="order__right">
                      <h3 className="text">{product.title}</h3>
                      <h3 className="price">${product.price}</h3>
                      <h3 className="totalPrice">
                        ${(product.price * product.countable).toFixed(2)}
                      </h3>
                    </div>
                  </div>
                  <div className="bottom">
                    <input type="text" placeholder="Order Note..." />
                    <button onClick={() => handleDelete(product.id)}>
                      <i className="ri-delete-bin-line deleteBtn"></i>
                    </button>
                    <div
                      className={
                        activePay ? "div payment active" : "div payment"
                      }>
                      <Payment
                        setPayActive={setPayActive}
                        setAllActive={setAllActive}
                        setActive={setActive}
                        defaults={defaults}
                        setDefault={setDefault}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="disASub">
            <div className="flex">
              <p className="key">Discount</p>
              <p className="value">$0</p>
            </div>
            <div className="flex">
              <p className="key">Sub Total</p>
              <p className="value subtotal">${subTotal.toFixed(2)}</p>
            </div>
          </div>
          <button className="paymentBtn" onClick={payment}>
            Continue to Payment
          </button>
        </div>
      ) : (
        <div className="bigContent">
          <h2 className="title">
            <i
              className="ri-arrow-left-line removeModals"
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            />
            Orders
          </h2>
          <div className="img">
            <img src={breakfast} alt="" />
          </div>
          <div className="content">
            <h2 className="title">No Order</h2>
            <p>Go find the products you like</p>
            <button className="removeModals" onClick={closePage}>
              To Order
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Orders;