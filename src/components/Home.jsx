import React from "react";
import "./home.css";
import homoLogo from "./../images/Home_logo.webp";
import rating from "./../images/rating.webp";
import company from "./../images/company.svg";

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-image-wrapper">
          {/* <img src="" alt="" className="hero-image" /> */}
          <img src={homoLogo} className="hero-image" />
        </div>
        <div className="hero-details">
          <img src={rating} className="rating-image" />
          <h1 className="title">Lose Weight the Healthi way</h1>
          <p className="description">
            7 Science-Based plans, the easiest to use app, and a supportive
            community - reach your goals and transform your health.
          </p>
          <div className="buttons">
            <a href="#">Get Started for Free</a>
          </div>
          <br />
          <h4 className="subtitle">Featured in:</h4>
          <img src={company} className="company-logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
