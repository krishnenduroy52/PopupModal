import React, { useState } from "react";

// Coupon Component
// import Coupon from "../Popup/Coupon";

// Giveaway Component --------------------
import Giveaway from "../Popup/Giveaway";

// promocode Component -------------------
// import Promocode from "../Popup/Promocode";

// Images---------------------------------

// This img for Coupon and Giveaway
import couponCode from "../../img/couponMainImg.jpg";

// This img for Promocode
// import laptopImg from "../../img/Laptop.jpg";

export default function MyButton({ text, btn, img }) {
  const [show, setShow] = useState("false");
  return (
    <div className="btnAndimg">
      <div align="center" className="btn">
        <p>{text}</p>
        <button className="btn-primary" onClick={() => setShow(true)}>
          {btn}
        </button>
      </div>
      <img src={img} alt={btn} />
      {show === true ? (
        //  Here is Coupon Modal --------------------------------------------

        /*
        <Coupon
          show={show}
          onClose={() => setShow(false)}
          img={couponCode}
          bigText="%30 OFF COUPON"
          smallText="If you are looking for a new way to promote your business"
          code="SUMMER30"
          exploreUrl="www.google.com"
          noInterest="No. I don't want to save money"
        />
        */

        //  Here is Giveaway Model ------------------------------------------

        <Giveaway
          show={show}
          onClose={() => setShow(false)}
          img={couponCode}
          bigText="$150 Gift Card For Summer Collections"
          smallText="Will you be the next winner?"
          shopNow="shopnowUrl"
        />
      ) : // Promocode Modal ---------------------------------------------------
      // <Promocode
      //   show={show}
      //   onClose={() => setShow(false)}
      //   img={laptopImg}
      //   bigText="Looking for a new laptop?"
      //   smallText="Your Coupon Code: "
      //   code="LAPTOP2022"
      //   shopNow="shopnowURL"
      // />

      null}
    </div>
  );
}
