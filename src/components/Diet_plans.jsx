import React from "react";
import "./diet_plans.css";
import fresh from "./../images/plan/fresh.jpg";
import carb from "./../images/plan/carb.jpg";
import craving from "./../images/plan/craving.webp";
import sugar from "./../images/plan/sugar.jpg";
import balance from "./../images/plan/balance.jpg";
import calorie from "./../images/plan/calorie.jpg";
import keto from "./../images/plan/keto.jpg";
import banner from "./../images/banner.avif";

const Diet_plans = () => {
  return (
    <div>
      <img src={banner} alt="" className="banner" />
      <h2 class="projects-header">
        7 weight loss plans. 1 is perfect for you.
      </h2>
      <div class="card-container">
        <div class="card">
          <img src={fresh} alt="content" />
          <div class="card-content">
            <h3>HEALTHI FRESH</h3>
            <p>ckjbqiwuecvqwkudvbhclwudvycqwkdubhcjsad cuwvdhchwjdbckuwh</p>
            <a
              href="https://github.com/Sandesh-naik0/Music-Application"
              class="btn"
            >
              Read More
            </a>
          </div>
        </div>

        <div class="card">
          <img src={carb} alt="content" />
          <div class="card-content">
            <h3>CARB CONCIOUS</h3>
            <p>ckjbqiwuecvqwkudvbhclwudvycqwkdubhcjsad cuwvdhchwjdbckuwh</p>
            <a
              href="https://github.com/Sandesh-naik0/Fraud-Detection"
              class="btn"
            >
              Read More
            </a>
          </div>
        </div>

        <div class="card">
          <img src={craving} alt="content" />
          <div class="card-content">
            <h3>CONQUER CRAVINGS</h3>
            <p>ckjbqiwuecvqwkudvbhclwudvycqwkdubhcjsad cuwvdhchwjdbckuwh</p>
            <a
              href="https://github.com/Sandesh-naik0/Online_Crime_Reporting_System"
              class="btn"
            >
              Read More
            </a>
          </div>
        </div>

        <div class="card">
          <img src={sugar} alt="content" />
          <div class="card-content">
            <h3>SUGAR SMART</h3>
            <p>ckjbqiwuecvqwkudvbhclwudvycqwkdubhcjsad cuwvdhchwjdbckuwh</p>
            <a
              href="https://github.com/Sandesh-naik0/Gym_portfolio"
              class="btn"
            >
              Read More
            </a>
          </div>
        </div>
        <div class="card">
          <img src={balance} alt="content" />
          <div class="card-content">
            <h3>BETTER BALANCE</h3>
            <p>ckjbqiwuecvqwkudvbhclwudvycqwkdubhcjsad cuwvdhchwjdbckuwh</p>
            <a
              href="https://github.com/Sandesh-naik0/Music-Application"
              class="btn"
            >
              Read More
            </a>
          </div>
        </div>

        <div class="card">
          <img src={calorie} alt="content" />
          <div class="card-content">
            <h3>CALORIE COMMAND</h3>
            <p>ckjbqiwuecvqwkudvbhclwudvycqwkdubhcjsad cuwvdhchwjdbckuwh</p>
            <a
              href="https://github.com/Sandesh-naik0/Fraud-Detection"
              class="btn"
            >
              Read More
            </a>
          </div>
        </div>

        <div class="card">
          <img src={keto} alt="content" />
          <div class="card-content">
            <h3>KEEPING KETO</h3>
            <p>ckjbqiwuecvqwkudvbhclwudvycqwkdubhcjsad cuwvdhchwjdbckuwh</p>
            <a
              href="https://github.com/Sandesh-naik0/Online_Crime_Reporting_System"
              class="btn"
            >
              Read More
            </a>
          </div>
        </div>

        <button className="right">right</button>
      </div>

      {/* <div className="plan-types">
            <card className="card-item">
                <img src="" alt="" className="card-type" />
                <h3 className='card-type'>HEALTHI FRESH</h3>
                <p className='card-details'>A match to your GLP-1 medication</p>
            </card>
            <card className="card-item">
                <img src="" alt="" className="card-type" />
                <h3 className='card-type'>CARB CONCIOUS</h3>
                <p className='card-details'>A match to your GLP-1 medication</p>
            </card>
            <card className="card-item">
                <img src="" alt="" className="card-type" />
                <h3 className='card-type'>CONQUER CRAVINGS</h3>
                <p className='card-details'>A match to your GLP-1 medication</p>
            </card>
            <card className="card-item">
                <img src="" alt="" className="card-type" />
                <h3 className='card-type'>SUGAR SMART</h3>
                <p className='card-details'>A match to your GLP-1 medication</p>
            </card>
            <card className="card-item">
                <img src="" alt="" className="card-type" />
                <h3 className='card-type'>BETTER BALANCE</h3>
                <p className='card-details'>A match to your GLP-1 medication</p>
            </card>
            <card className="card-item">
                <img src="" alt="" className="card-type" />
                <h3 className='card-type'>CALORIE COMMAND</h3>
                <p className='card-details'>A match to your GLP-1 medication</p>
            </card>
            <card className="card-item">
                <img src="" alt="" className="card-type" />
                <h3 className='card-type'>KEEPING KETO</h3>
                <p className='card-details'>A match to your GLP-1 medication</p>
            </card>
        </div> */}
    </div>
  );
};

export default Diet_plans;
