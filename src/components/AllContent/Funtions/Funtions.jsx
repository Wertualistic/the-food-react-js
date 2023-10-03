import React from "react";
import Information from "../Information/Information";
import OrderHistory from "../OrderHistory/OrderHistory";

function Funtions({
  activeInfo,
  activeOrd,
  setInfoActive,
  setOrdActive,
  setActive,
  setAllActive,
}) {
  const handleInfoClick = () => {
    setOrdActive(false);
    setInfoActive(true);
  };

  const handleOrdClick = () => {
    setOrdActive(true);
    setInfoActive(false);
  };

  const handleClick = () => {
    setActive(false);
    setAllActive(false);
  };

  return (
    <>
      {activeInfo ? (
        <div
          className={activeInfo ? "div information active" : "div information"}>
          <Information
            setInfoActive={setInfoActive}
            setOrdActive={setOrdActive}
          />
        </div>
      ) : (
        <>
          <h2 className="title">
            <i
              className="ri-arrow-left-line removeModals"
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            />
            Functions
          </h2>
          <ul className="ul first">
            <li className="informationBtn" onClick={handleInfoClick}>
              <i className="ri-information-line" /> Information
            </li>
            <li>
              <i className="ri-global-line" /> Language
            </li>
            <li className="orderHistoryBtn" onClick={handleOrdClick}>
              <i className="ri-time-line" /> Order history
            </li>
          </ul>
        </>
      )}

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
        <div style={{ display: "none" }}>
          <h2 className="title">
            <i
              className="ri-arrow-left-line removeModals"
              style={{ cursor: "pointer" }}
            />
            Functions
          </h2>
          <ul className="ul first">
            <li className="informationBtn" onClick={handleInfoClick}>
              <i className="ri-information-line" /> Information
            </li>
            <li>
              <i className="ri-global-line" /> Language
            </li>
            <li className="orderHistoryBtn" onClick={handleOrdClick}>
              <i className="ri-time-line" /> Order history
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Funtions;
