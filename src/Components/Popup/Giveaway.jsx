import React from "react";
import "./Giveaway.css";

export default function Giveaway({
  show,
  onClose,
  img,
  bigText,
  smallText,
  shopNow,
}) {
  return (
    <div className="modalWrapper">
      <div className="modal">
        <button onClick={onClose} className="btnClose btn-close" />
        <div className="mainContainer">
          <img src={img} alt="" className="main__img" />
          <div className="textPart" align="center">
            <h2 className="big__text">{bigText}</h2>
            <p className="small__text">{smallText}</p>
            <div className="AllBtn">
              <button className="Thanks__btn btnG" onClick={onClose}>
                No Thanks
              </button>
              <button className="shop__btn btnG">Shop Now</button>
            </div>
            <p className="nointerest" onClick={onClose}></p>
          </div>
        </div>
      </div>
    </div>
  );
}
