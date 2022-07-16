import React from "react";
import "./App.css";

// Img import
// import couponCode from "./img/couponcode.webp";
import giveaway from "./img/giveaway.webp";
// import newsletter from "./img/newsletter.webp";

// Header component
import Head from "./Components/HomePage/Head";

// Component
import Triger from "./Components/HomePage/TrigerPopup";

function App() {
  return (
    <div className="App">
      <Head />
      <div className="allPop">
        <Triger
          text="You want to save your money? Check out our updated Coupon Code"
          btn="coupon Code"
          img={giveaway}
        />
      </div>
    </div>
  );
}

export default App;
