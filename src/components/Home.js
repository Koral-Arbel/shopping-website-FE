import React from "react";
import Slider from "./inc/Slider";

function Home() {
  return (
    <div>
      <Slider />
      <div className="container">
        <div className="py-4">
          <h1>Welcome to Shopping Website Online</h1>
          <button className="btn btn-primary">Click My</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
