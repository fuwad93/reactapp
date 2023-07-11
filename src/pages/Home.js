import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import backgroundImage from "../assets/BACKGROUNDIMAGE.jpg"
import "../styles/Home.css";

function Home() {
  return (
    (
    <div classname="home" style={{ logo: `url(${logo})` }}>
        <div classname="home" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="headerContainer">
      function (){
       backgroundImage 
      }
        <h1> D1 CLOTHING </h1>
        <p> STAY WINNING</p>
        <Link to="/menu">
          <button> COP NOW </button>
        </Link>
      </div>
    </div>
    )
    
  );}


export default Home;