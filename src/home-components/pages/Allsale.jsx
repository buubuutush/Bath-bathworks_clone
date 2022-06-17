import React, {useState} from 'react'
import './Common.css'
import axios from 'axios'
import { useEffect } from 'react'
import Productcard from '../productcard/Productcard'

const Allsale = () => {

  const [loading,setloading]=useState(true)
  const [error,seterror]=useState(false)
  const [data,setdata]=useState([])
  const [page,setpage]=useState(1)
  const [ratingorder,setratingorder]=useState("")
  const [costorder,setcostorder]=useState("")
  const [filterrating,setfilterrating]=useState(0)


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
          _sort:"discountprice",
          _order:`${ratingorder},${costorder}`,
          rating_gte:filterrating

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

// console.log(data);



  return (
    <div className='maindiv1'>
      {loading && <div>....loading</div>}
      <div className='leftdiv'>
        <h2>TOP OFFERS</h2>
        <ul>
          <li>50-75% Off Select Sale Items</li>
          <li>$4.95 Select Body Care</li>
          <li>50% Off Select 3-Wick Candles</li>
          <li>$3.50 Select Wallflowers</li>
          <li>50% Off Select Hand Soaps</li>
          <li>$5.95 Select Single Wick Candles</li>
          <li>50% Off Select Hand Sanitizers</li>
          <li>25-50% Off Select Gifts & Accessories</li>
        </ul>

        <h2>SHOP BY CATEGORY</h2>
        <ul>
          <li>All Sale Body Care</li>
          <li>All Sale Candles</li>
          <li>All Sale Home Fragrance</li>
          <li>All Sale Hand Soaps</li>
          <li>All Sale Hand Sanitizers</li>
          <li>All Sale Gifts & Accessories</li>
        </ul>
      </div>
      <div className='rightdiv'>
        <div>
          <span>All Sale</span>
          <Paginationcomponent currentpage={page} lastpage={5} onpagechange={setpage} />
        </div>
        <hr/>
        <div className='filters'>
          <span style={{textDecoration:'none',fontSize:'15px'}}>Filter By:</span>
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
            <option  onClick={()=>setcostorder("asc")}>Price Low To High</option>
            <option onClick={()=>setcostorder("desc")}>Price High To Low</option>
            <option  onClick={()=>setratingorder("asc")}>Top Rated</option>
            
          </select>
        </div>
        <hr/>




        
        <div className='showcard'>


            {
              data.map((item)=>
              <Productcard key={item.id} {...item}/>)
            }          
        </div>
        <hr/>
        <Paginationcomponent style={{alignItem:'left'}} currentpage={page} lastpage={5} onpagechange={setpage} />
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

export default Allsale