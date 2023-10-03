import React from "react";

function Information({ setInfoActive, setOrdActive }) {
  return (
    <>
      <h2 className="title">
        <i
          onClick={() => {
            setInfoActive(false)
            setOrdActive(false)
          }}
          className="ri-arrow-left-line arrowInfo"
          style={{ cursor: "pointer" }}
        />
        Information
      </h2>
      <ul className="ul second">
        <li>
          <i className="ri-phone-line" /> +998 71 000 00 71
        </li>
        <li>
          <i className="ri-map-pin-line" /> Tashkent, str. Amir Temur 15
        </li>
        <li>
          <i className="ri-mail-fill" /> F.P.D_77@gmail.com
        </li>
        <li>
          <i className="ri-global-line" /> www.F.P.D_77.com
        </li>
        <li>
          <i className="ri-whatsapp-line" />
          <i className="ri-instagram-line" />
          <i className="ri-telegram-line" />
          <i className="ri-facebook-box-line" />
        </li>
      </ul>
    </>
  );
}

export default Information;
