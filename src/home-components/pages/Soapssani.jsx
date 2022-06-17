import React from 'react'
import './Common.css'
const Soapssani = () => {
  return (
    <div className='maindiv1'>
      <div className='leftdiv'>
      <h2>TOP OFFERS</h2>
      <ul>
        <li>50% Off Select Hand Soaps</li>
        <li>50% Off Select Hand Sanitizers</li>
      </ul>

      <h2>HAND SOAPS</h2>
      <ul>
        <li>All Hand Soaps</li>
        <li>Foaming Soaps</li>
        <li>Gel & Nourishing Soaps</li>
        <li>Soap Holders</li>
      </ul>
      <h2>HAND SANITIZERS</h2>
      <ul>
        <li>All Hand Sanitizers</li>
        <li>PocketBac Hand Sanitizers</li>
        <li>Hand Sanitizer Sprays</li>
        <li>Full-Size Sanitizers</li>
        <li>Hand Sanitizer Holders</li>
      </ul>
      <h2>FEATURED</h2>
      <ul>
        <li>Gentle & Clean Hand Soaps</li>
      </ul>
    </div>
    <div className='rightdiv'>
        <div >
        <span>Hand Soaps & Sanitizers</span>
      </div>
      <hr/>
      <div className='filters'>
        <span>Filter By:</span>
        <select>
            <option>PRODUCT TYPE</option>
            <option>3-wick Candle</option>
            <option>Bar Soap</option>
            <option>Bath Soak</option>
            <option>Body Cream</option>
            <option>Body Lotion</option>
            <option>Body Scrub</option>
            <option>3-wick Candle</option>
          </select>
          <select>
            <option>FRAGRANCE NAME</option>
            <option>A Thousand Wishes</option>
            <option>Apple Gariand</option>
            <option>Berry Waffle Cone</option>
            <option>Black Tie</option>
            <option>Blue Ocean Waves</option>
            <option>Body Scrub</option>
            <option>Cacao Rose</option>
          </select>
          <select>
            <option>FRAGRANCE CATEGORY</option>
            <option>Floral</option>
            <option>Fresh</option>
            <option>Fruity</option>
            <option>Sweet</option>
            <option>Body Lotion</option>
            <option>Woodsy</option>
            
          </select>
          <select>
            <option>Sort By</option>
            <option>New Arrivel</option>
            <option>Best Seller</option>
            <option>Price Low To High</option>
            <option>Price High To Low</option>
            <option>Top Rated</option>
            <option>3-wick Candle</option>
          </select>
      </div>
      <hr/>




      
      <div></div>
      <hr/>
    </div>
  </div>
  )
}

export default Soapssani