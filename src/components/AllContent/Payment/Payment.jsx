import React, { useState } from "react";

function Payment({
  setPayActive,
  setActive,
  setAllActive,
  defaults,
  setDefault,
}) {
  const cancelBtn = () => {
    setPayActive(false);
    setActive(false);
    setAllActive(false);
  };
  const [activeC, setActiveC] = useState(null);
  const [arrow, setArrow] = useState(false);

  const confirmPayment = () => {
    alert("Your order successfully sent!!");
    localStorage.removeItem("products");
  };

  const contents = [
    {
      id: 1,
      content: (
        <>
          <i className="ri-checkbox-circle-line check" />
          <i className="ri-bank-card-line" />
          <p className="text">Credit Card</p>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <i className="ri-checkbox-circle-line check" />
          <i className="ri-paypal-line" />
          <p className="text">Paypal</p>
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <i className="ri-checkbox-circle-line check" />
          <i className="ri-wallet-3-fill" />
          <p className="text">Cash</p>
        </>
      ),
    },
  ];

  const handleClick = (item) => {
    setActiveC(item.id === activeC ? null : item.id);
  };

  return (
    <>
      <div className="top">
        <h2 className="title">Payment</h2>
        <p>3 payment method available</p>
      </div>
      <form>
        <h2 className="title">Payment Method</h2>
        <div className="content">
          {contents.map((itm) => {
            return (
              <div
                key={itm.id}
                className={
                  activeC === itm.id ? "content__card active" : "content__card"
                }
                onClick={() => handleClick(itm)}>
                {itm.content}
              </div>
            );
          })}
        </div>
        <div className="input">
          <label>Cardholder Name</label>
          <input type="text" placeholder="Levi Ackerman" required />
        </div>
        <div className="input">
          <label>Card Number</label>
          <input
            type="name"
            maxLength={16}
            placeholder="2564 1421 0897 1244"
            required
          />
        </div>
        <div className="inputs a">
          <div className="input">
            <label>Expiration Date</label>
            <input type="text" placeholder="02/2022" required />
          </div>
          <div className="input">
            <label>CVV</label>
            <input type="password" maxLength={3} placeholder={211} required />
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <label>Order Type</label>
            <div className="top__">
              <div
                className="dropdown__ items__"
                onClick={() => setArrow(!arrow)}
                id="dropdown1">
                <i
                  className={
                    arrow
                      ? "ri-arrow-down-s-line transform"
                      : "ri-arrow-down-s-line"
                  }
                  id="arrow1"
                />
                <h3 id="default__">{defaults}</h3>
                <div
                  className={
                    arrow ? "dropdown__ open close" : "dropdown__ open"
                  }
                  id="dropdownopen1">
                  <h3
                    className="changer__"
                    onClick={() => setDefault("Dine In")}>
                    Dine In
                  </h3>
                  <h3 className="changer__" onClick={() => setDefault("To Go")}>
                    To Go
                  </h3>
                  <h3
                    className="changer__"
                    onClick={() => setDefault("Delivery")}>
                    Delivery
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="input">
            <label>Table no.</label>
            <input type="number" placeholder={140} required />
          </div>
        </div>
        <div className="btns">
          <button className="remove" onClick={cancelBtn}>
            Cancel
          </button>
          <button onClick={confirmPayment} type="submit">
            Confirm Payment
          </button>
        </div>
      </form>
    </>
  );
}

export default Payment;
