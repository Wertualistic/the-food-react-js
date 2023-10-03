import React from "react";

function OrderHistory({ setOrdActive, setInfoActive }) {
  return (
    <>
      <h2 className="title">
        <i
          onClick={() => {
            setInfoActive(false);
            setOrdActive(false);
          }}
          className="ri-arrow-left-line arrowOrder"
          style={{ cursor: "pointer" }}
        />
        Order history
      </h2>
      <ul className="ul">
        <li>
          Orders #34562 <span>Tuesday, 2 Feb 2021</span>
        </li>
        <li>
          Orders #34561 <span>Monday, 1 Feb 2021</span>
        </li>
        <li>
          Orders #34560 <span>Sanday, 31 Jan 2021</span>
        </li>
        <li>
          Orders #34559 <span>Friday, 29 Jan 2021</span>
        </li>
        <li>
          Orders #34558 <span>Wednesday, 27 Jan 2021</span>
        </li>
        <li>
          Orders #34557 <span>Saturday, 23 Jan 2021</span>
        </li>
        <li>
          Orders #34556 <span>Wednesday, 20 Jan 2021</span>
        </li>
      </ul>
    </>
  );
}

export default OrderHistory;
