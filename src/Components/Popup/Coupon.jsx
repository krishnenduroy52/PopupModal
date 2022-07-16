import React from "react";
import "./Coupon.css";

export default function Coupon({
  show,
  onClose,
  img,
  bigText,
  smallText,
  code,
  exploreUrl,
  noInterest,
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
            <code className="code__text">{code}</code>
            <button className="explore__btn">Explore Collection</button>
            <p className="nointerest" onClick={onClose}>
              {noInterest}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
