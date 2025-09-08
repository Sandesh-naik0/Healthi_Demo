import React from "react";
import "./price.css";

const price = () => {
  return (
    <div>
      <div className="price-container">
        <h2>Super-charge your weight loss with Healthi PRO</h2>
        <div className="price-row">
          <div className="price-col">
            <p>BASIC</p>
            <h3>
              $0.00 <span>/ month</span>
            </h3>
            <ul>
              <li>Calorie calculator</li>
              <li>
                <strike>Premuim plans</strike>
              </li>
              <li>
                <strike>Macros Tracking</strike>
              </li>
              <li>
                <strike>Community Posting</strike>
              </li>
              <li>
                <strike>Meal plans</strike>
              </li>
              <li>
                <strike>Fitbit Step Tracking</strike>
              </li>
              <li>
                <strike>Recipe Builder</strike>
              </li>
              <li>
                <strike>Voice Tracking</strike>
              </li>
            </ul>
            <button className="price-buy">Click here</button>
          </div>
          <div className="price-col">
            <p>PRO</p>
            <h3>
              $44.99 <span>/ month</span>
            </h3>
            <ul>
              <li>Premuim plans</li>
              <li>Calorie calculator</li>
              <li>Macros Tracking</li>
              <li>Community Posting</li>
              <li>Meal plans</li>
              <li>Fitbit Step Tracking</li>
              <li>Recipe Builder</li>
              <li>Voice Tracking</li>
            </ul>
            <button className="price-buy">Click here</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default price;

{
  /* <div className='price-container'>
        <div className='price-free'>
            <card className='card-free'>
                free
                <ul className='card-free1'>
                  <li>Calorie Tracking</li>
                </ul>
            </card>
        </div>
        <div className='price-pro'>
            <card className='card-pro'>
              <center><h1 className='pro-header'>PRO</h1></center>
              <ul className='card-pro1'>
                <li>Premium plans</li>
                <li>Calorie Tracking</li>
                <li>Macros Tracking</li>
                <li>Community Posting</li>
                <li>Meal Plans</li>
                <li>Fitbit Step tracking</li>
                <li>Recipe Builder</li>
                <li>Voice Tracking</li>
                <li>Priority Support</li>
              </ul>
            </card>
        </div>
    </div> */
}
