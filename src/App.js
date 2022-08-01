import React, { useState } from "react";
import "./App.css";

// Img import
import couponCode from "./img/couponcode.webp";
import giveaway from "./img/giveaway.webp";
import couMain from "./img/couponMainImg.jpg";

// Header component
import Head from "./Components/HomePage/Head";

// Component
import Coupon from "./Components/Popup/Coupon";
import Giveaway from "./Components/Popup/Giveaway";

function App() {
  const [showCoupon, setshowCoupon] = useState(false);
  const [showGive, setshowGive] = useState(false);

  return (
    <div className="App">
      <Head />
      <div className="allPop">
        <div className="btnAndimg">
          <img src={couponCode} alt="couponcode" />
          {showCoupon === true ? (
            <Coupon
              show={showCoupon}
              onClose={() => setshowCoupon(false)}
              img={couMain}
              bigText="%30 OFF COUPON"
              smallText="If you are looking for a new way to promote your business"
              code="SUMMER30"
              exploreUrl="www.google.com"
              noInterest="No. I don't want to save money"
            />
          ) : null}
          <div align="center" className="btn">
            <p>Are you looking for promocode, Let's try this code</p>
            <button className="btn-primary" onClick={() => setshowCoupon(true)}>
              Coupon Code
            </button>
          </div>
        </div>

        <div className="btnAndimg">
          <img src={giveaway} alt="giveaway" />
          {showGive === true ? (
            <Giveaway
              show={showGive}
              onClose={() => setshowGive(false)}
              img={couMain}
              bigText="$150 Gift Card For Summer Collections"
              smallText="Will you be the next winner?"
              shopNow="shopnowUrl"
            />
          ) : null}
          <div align="center" className="btn">
            <p>$150 Gift Card For Summer Collections</p>
            <button className="btn-primary" onClick={() => setshowGive(true)}>
              Giveaway
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
