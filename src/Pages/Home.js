import React from "react";
import { Link } from "react-router-dom";
import PannerImg from "../Images/pizzaPanar.avif";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${PannerImg})` }}>
      <div className="homeContent">
        <h1>NapoPizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
