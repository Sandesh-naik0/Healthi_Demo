import React from 'react'
import './price.css'

const price  = () => {
  return (
    <div className='price-container'>
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
    </div>
  )
}

export default price 