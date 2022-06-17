import React from 'react'
import './Common.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Productcard from '../productcard/Productcard'

const Candles = () => {

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
          type:'candle'
          
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
  cartdata=JSON.parse(localStorage.getItem("cart"))

  const itemid=data.filter((item)=>{
    return item.id===num
  })
  
setcartdata([...cartdata,itemid[0]])
  
  localStorage.setItem("cart",JSON.stringify(cartdata))
// console.log(cartdata)
}

// useEffect(()=>{
//   const candledata=data.filter((item)=>{
//     return item.type==='candle'
//   })
//   // setdata(candledata)
  
//   setdata(candledata)
// },[])
// console.log(data);
  return (
    <div className='maindiv1'>
      {loading && <div>....loading</div>}
      <div className='leftdiv'>
      <h2>TOP OFFERS</h2>
      <ul>
        <li>50% Off Select 3-Wick Candles</li>
        <li>$5.95 Select Single Wick Candles</li>
        <li>All Sale Candles</li>
      </ul>

      <h2>ALL CANDLES</h2>
      
      <ul>
        <li>3-Wick Candles</li>
        <li>Single Wick Candles</li>
        <li>Candle Holders & Accessories</li>
       </ul>
       <h2>FEATURED</h2>
      <ul>
        <li>The White Barn Shop</li>
       </ul>
    </div>
    <div className='rightdiv'>
        <div  >
        <span>All Candles</span>
        <Paginationcomponent currentpage={page} lastpage={5} onpagechange={setpage} />
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
export default Candles