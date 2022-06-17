import React from 'react'
import './Common.css'
const Mens = () => {
  return (
    <div className='maindiv1'>
       <div className='leftdiv'>
        <h2>THE MEN'S SHOP
</h2>
        <ul>
          <li>All Men's Body Care</li>
          <li>Body Wash & Shower Gel</li>
          <li>Moisturizers</li>
          <li>Body Spray & Cologne</li>
          <li>Home Fragrance</li>
          <li>Hand Soaps & Sanitizers</li>
           </ul>

       
      </div>
      <div className='rightdiv'>
        <div  >
          <span>Men's Fragrance, Body Care & More</span>
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

export default Mens