import React from "react";
import OrderHistory from "../OrderHistory/OrderHistory";

function Account({
  setInfoActive,
  setOrdActive,
  activeOrd,
  setActive,
  setAllActive,
}) {
  const handleClick = () => {
    setOrdActive(true);
    setInfoActive(false);
  };

  const click = () => {
    setActive(false);
    setAllActive(false);
  };

  return (
    <>
      {activeOrd ? (
        <div
          className={
            activeOrd ? "div orderHistory active" : "div orderHistory"
          }>
          <OrderHistory
            setInfoActive={setInfoActive}
            setOrdActive={setOrdActive}
          />
        </div>
      ) : (
        <>
          <h2 className="title">
            <i
              className="ri-arrow-left-line removeModals"
              onClick={click}
              style={{ cursor: "pointer" }}
            />
            Profil
          </h2>
          <div className="profile">
            <div className="name">
              <h2>
                <span className="firstLetter">D</span>
              </h2>
              <h3 className="userName">Denis</h3>
            </div>
            <input
              type="text"
              className="editInput"
              placeholder="Change your name..."
            />
            <button id="edit">Edit profile</button>
          </div>
          <div className="orderHistoryBtnAcc" onClick={handleClick}>
            <i className="ri-time-line" /> Order history
          </div>
        </>
      )}
    </>
  );
}

export default Account;
