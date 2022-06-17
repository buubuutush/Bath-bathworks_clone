import React from 'react'
import './Common.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Productcard from '../productcard/Productcard'

const Bodycare = () => {
  const [loading,setloading]=useState(true)
  const [error,seterror]=useState(false)
  const [data,setdata]=useState([])
  const [page,setpage]=useState(1)
  const [ratingorder,setratingorder]=useState("")
  const [costorder,setcostorder]=useState("")
  const [filterrating,setfilterrating]=useState(0)

const [cartdata,setcartdata]=([])



  useEffect(()=>{
    fetchdata({page, ratingorder,costorder,filterrating})
  },[page,ratingorder,costorder,filterrating])


    const fetchdata = async()=>{

      setloading(true)
      axios({
        method:'get',
        url:'http://localhost:8080/bath',
        params:{
          _page:page,
          _limit:6,
          _sort:"discountprice,rating",
          _order:`${ratingorder},${costorder}`,
          rating_gte:filterrating,
          type:'mists'
          
        }
      })
      .then(res =>{
        setdata(res.data)
        setloading(false)
      })
      .catch(err=>{
        seterror(true)
        setloading(false)
      })
    }

const addtobag=(num)=>{
 

  const itemid=data.filter((item)=>{
    return item.id===num
  })
  

  // let localcart=JSON.parse(localStorage.getItem("cart"))
  localStorage.setItem("cart",JSON.stringify(itemid))
// console.log(cartdata)
}
  return (
    <div className='maindiv1'>
       <div className='leftdiv'>
        <h2>TOP OFFERS</h2>
        <ul>
          <li>$4.95 Select Body Care</li>
          <li>All Sale Body Care</li>
          
        </ul>

        <h2>BATH & SHOWER</h2>
        <ul>
          <li>All Bath & Shower</li>
          <li>Body Wash & Shower Gel</li>
          <li>Bubble Bath</li>
          <li>Body Scrub</li>
          <li>Bar Soap</li>
          <li>Bath Accessories</li>
        </ul>
        <h2>MOISTURIZERS</h2>
        <ul>
          <li>All Moisturizers</li>
          <li>Body Lotion</li>
          <li>Body Cream</li>
          <li>Hand Cream</li>
          <li>Lip Gloss & Balms</li>
        </ul>
        <h2>FRAGRANCE</h2>
        <ul>
          <li>All Fragrance</li>
          <li>Body Sprays & Mists</li>
          <li>Perfume & Cologne</li>
        </ul>
        <h2>AROMATHERAPY</h2>
        <ul>
          <li>All Aromatherapy</li>
          <li>Body Wash & Shower Gel</li>
          <li>Moisturizers</li>
          <li>Body Scrub</li>
        </ul>
        <h2>FEATURED</h2>
        <ul>
          <li>Retired Fragrances</li>
          <li>Travel Size</li>
         </ul>
      </div>
      <div className='rightdiv'>
        <div >
          <span>All Body Care</span>
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




        
        <div className='showcard'>


{
  data.map((item)=>
  <Productcard key={item.id} {...item} addtobag={addtobag}/>)
}          
</div>
        <hr/>
      </div>
    </div>
  )
}
const Paginationcomponent=({
  currentpage,
  lastpage,onpagechange
})=>{
  const arr=new Array(lastpage).fill(0)
  return (
    <div>
      {
        arr.map((item,page)=><button onClick={()=>onpagechange(page+1)} disabled={(page+1)===currentpage} >{page+1}</button>)
      }
    </div>
  )
}
export default Bodycare