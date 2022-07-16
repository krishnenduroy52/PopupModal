import React from "react";
import "./Promocode.css";

export default function Promocode({
  show,
  onClose,
  img,
  bigText,
  smallText,
  code,
  shopNow,
}) {
  return (
    <div className="modalWrapper">
      <div className="modal">
        <button onClick={onClose} className="btnClose btn-close" />
        <div className="mainContainer">
          <h2 className="big__text">{bigText}</h2>

          <img src={img} alt="" className="main__img" />

          <p className="small__text">
            {smallText} {code}
          </p>
          <div className="AllBtn">
            <button className="Thanks__btn btnG" onClick={onClose}>
              No Thanks{" "}
            </button>
            <button className="shop__btn btnG">Shop Now </button>
          </div>
          <p className="nointerest" onClick={onClose}></p>
        </div>
      </div>
    </div>
  );
}
