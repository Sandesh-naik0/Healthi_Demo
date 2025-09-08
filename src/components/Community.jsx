import React from "react";
import "./community.css";
import fatloss from "./../images/fatloss.png";
import podcast from "./../images/podcast.webp";
import cookies from "./../images/cookies.webp";

const community = () => {
  return (
    <>
      <div className="community-container">
        <h2>COMMUNITY</h2>
        <div className="community-card-container">
          <div className="card">
            <img src={fatloss} alt="content" />
            <div className="card-content">
              <h3>SHARE YOUR SUCCESS</h3>
              <p>ckjbqiwuecvqwkudvbhclwudvycqwkdubhcjsad cuwvdhchwjdbckuwh</p>
              <a
                href="https://github.com/Sandesh-naik0/Music-Application"
                className="btn"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="card">
            <img src={podcast} alt="content" />
            <div className="card-content">
              <h3>GET MOTIVATED</h3>
              <p>ckjbqiwuecvqwkudvbhclwudvycqwkdubhcjsad cuwvdhchwjdbckuwh</p>
              <a
                href="https://github.com/Sandesh-naik0/Fraud-Detection"
                className="btn"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="card">
            <img src={cookies} alt="content" />
            <div className="card-content">
              <h3>GET MOTIVATED</h3>
              <p>ckjbqiwuecvqwkudvbhclwudvycqwkdubhcjsad cuwvdhchwjdbckuwh</p>
              <a
                href="https://github.com/Sandesh-naik0/Online_Crime_Reporting_System"
                className="btn"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default community;
