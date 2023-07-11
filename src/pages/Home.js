import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/PSGshirt.png";
import BannerImage2 from "../Assets/ManchesterUnited.png"
import "../styles/Home.css";

function Home() {
  return (
    (
    <div classname="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div classname="home" style={{ backgroundImage: `url(${BannerImage2})` }}></div>
      <div className="headerContainer">
        <h1> D1 CLOTHING </h1>
        <p> STAY WINNING</p>
        <Link to="/menu">
          <button> BUY NOW </button>
        </Link>
      </div>
    </div>
    )
    
  );}
{"}"}

export default Home;