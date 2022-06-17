import React, { useState } from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Mainbody from '../body/mainbody/Mainbody'
import Allsale from '../pages/Allsale'
import Bodycare from '../pages/Bodycare'
import Candles from '../pages/Candles'
import Homefragrance from '../pages/Homefragrance'
import Soapssani from '../pages/Soapssani'
import Mens from '../pages/Mens'
import Gifts from '../pages/Gifts'
import BestSeller from '../pages/BestSeller'
import Cart from '../cart/Cart'
import Profile from '../profile/Profile'

const Navbar = () => {
const [offer , setoffer]=useState(false)
const [bodycare , setbodycare]=useState(false)
const [candles , setcandles]=useState(false)
const [fragrance , setfragrance]=useState(false)
const [soapssani , setsoapssani]=useState(false)
const [mens , setmens]=useState(false)
const [gifts, setgifts]=useState(false)
const [bestseller , setbestseller]=useState(false)

const [showsecond,setshowsecond]=useState(false)

const [showaccount, setshowaccount] = useState(false)

const [bathshower,setbathsower]=useState(false)
const [moisturizers,setmoisturizers]=useState(false)
const [fragranceshow,setfragranceshow]=useState(false)
const [aromatherapy,setaromatherapy]=useState(false)
const [feature,setfeature]=useState(false)
const [explore,setexplore]=useState(false)

const foroffer=()=>{
  setoffer(true)
  setbodycare(false)
  setcandles(false)
  setfragrance(false)
  setsoapssani(false)
  setmens(false)
  setgifts(false)
  setbestseller(false)
}
const forbodycare=()=>{
  
  setbodycare(true)
  setoffer(false)
  setcandles(false)
  setfragrance(false)
  setsoapssani(false)
  setmens(false)
  setbestseller(false)
  setgifts(false)
}
const forcandles=()=>{
  setcandles(true)
  setoffer(false)
  setbodycare(false)
  setfragrance(false)
  setsoapssani(false)
  setmens(false)
  setgifts(false)
  setbestseller(false)
}
const forfragrance=()=>{
  
  setfragrance(true)
  setoffer(false)
  setbodycare(false)
  setcandles(false)
  setsoapssani(false)
  setmens(false)
  setgifts(false)
  setbestseller(false)
}
const forsoapssani=()=>{
  setsoapssani(true)
  setoffer(false)
  setbodycare(false)
  setcandles(false)
  setfragrance(false)
  setmens(false)
  setgifts(false)
  setbestseller(false)
}
const formen=()=>{
  setmens(true)
  setoffer(false)
  setbodycare(false)
  setcandles(false)
  setfragrance(false)
  setsoapssani(false)
  setgifts(false)
  setbestseller(false)
}
const forgifts=()=>{
  setgifts(true)
  setoffer(false)
  setbodycare(false)
  setcandles(false)
  setfragrance(false)
  setsoapssani(false)
  setmens(false)
  setbestseller(false)
}
const forbestseller=()=>{
  setbestseller(true)
  setoffer(false)
  setbodycare(false)
  setcandles(false)
  setfragrance(false)
  setsoapssani(false)
  setmens(false)
  setgifts(false)
}
  
  return (
    <div className='maindiv'>

        <div className='upperdiv'>
            <div></div>
            <Link to="/" onClick={<Mainbody/>}>
                <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw3c999621/images/svg-icons/Logos-main.svg?yocs=o_s_" alt="" />
            </Link>
            <div className='inputbox'>
               <div className='inputbox1st'>
                    <input placeholder='Search by fragrance or product...'/>
                    <button>
                    <FontAwesomeIcon icon={faSearch} />
                    </button>
               </div>
               <div className='inputbox2nd'>
               <FontAwesomeIcon icon={faUserCircle} onPointerEnter={()=>{setshowaccount(true)}}/> 
               </div>
                <Link to='/cart' onClick={<Cart/>} className='inputbox2nd'>      
                <FontAwesomeIcon icon={faShoppingBag} />
                </Link>     
                  
                  
               
            </div>
        </div>
        {
          showaccount? <div className='showaccount' onPointerLeave={()=>{setshowaccount(false)}}>
                  <div>
                    <ul>
                   
                      <Link to='/profile' onClick={<Profile/>}  style={{ textDecoration:'none',fontSize:'14px'}}>Sign In or Sign Up</Link>
                    
                      <li>Order Tracking</li>
                      <li>My Auto Refresh</li>
                      <li>My Love-It List</li>
                    </ul>
                  </div>
          </div>
          :
          ""
        }
        <div className='lowerdiv'>

            <ul>
               <Link to="/allsale" onClick={<Allsale/>} onPointerEnter={foroffer}  style={{textDecoration:"none"}}>All SALE</Link>
               <Link to="/bodycare" onClick={<Bodycare/>} onPointerEnter={forbodycare} style={{textDecoration:"none"}}>BODY CARE</Link>
               <Link to="/candles" onClick={<Candles/>} onPointerEnter={forcandles} style={{textDecoration:"none"}}>CANDLES</Link>
               <Link to="/homefragrance" onClick={<Homefragrance/>} onPointerEnter={forfragrance} style={{textDecoration:"none"}}>HOME FRAGRANCE</Link>
               <Link to="/soapssani" onClick={<Soapssani/>} onPointerEnter={forsoapssani} style={{textDecoration:"none"}}>HAND SOAPS & SANITIZERS</Link>
               <Link to="/mens" onClick={<Mens/>} onPointerEnter={formen} style={{textDecoration:"none"}}> MEN'S</Link>
               <Link to="/gifts" onClick={<Gifts/>} onPointerEnter={forgifts} style={{textDecoration:"none"}}>GIFTS</Link>
               <Link to="/bestseller" onClick={<BestSeller/>} onPointerEnter={forbestseller} style={{textDecoration:"none"}}>BEST SELLERS</Link>
            </ul>
               
        </div>
        {
          offer?<div onMouseLeave={()=>{setoffer(false)}} style={{width:'100%',height:'100px' ,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <div className='offerdiv'> 
              <div >
                <div>
                  <div onPointerEnter={()=>{setshowsecond(false)}}>SHOP BY CATEGORY</div>
                  <div onPointerEnter={()=>{setshowsecond(true)}}>EXPLORE ALL SALE</div>
                </div>
              {
                showsecond?" ":
                <>
                  <div>
                   <div>All Sale Body Care</div>
                   <div>All Sale Candles</div>
                   <div>All Sale Home Fragrance</div>
                   <div>All Sale Hand Soaps</div>
                   <div>All Sale Hand Sanitizers</div>
                </div>
                <div>
                  <div>All Sale Gifts & Accessories</div>
                </div>
                </>
              }
              </div>
              <div className='secondoffer' onPointerLeave={()=>{setshowsecond(false)}}>
                <div>
                   <div>ALL SALE OFFERS</div>
                   <div>50-75% Off Select Sale Items</div>
                   <div>$11.95 Select 3-wick Candles</div>
                   <div>$4.95 Select Body Care</div>
                </div>
                <div>
                  <div>$3.50 Select Wallflowers</div>
                  <div>50% Off Select Hand Soaps</div>
                </div>
                <div>
                  <div>75% Off Select Body Care</div>
                  <div> $5.95 Select Single Wick Candles</div>
                </div>
                <div>
                  <div>50% Off Select Hand Sanitizers</div>
                  <div>25-50% Off Select Gifts & Accessories</div>
                </div>
              </div>
            </div>
          </div>
          : 
          ""
        }
         {
          bodycare?<div onMouseLeave={()=>{setbodycare(false)}} style={{width:'100%',height:'auto',padding:'0 0 0 20px'  ,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
             <div className='bodycarediv'> 
              <div style={{display:'flex'}}>
                <div>
                  <div onPointerEnter={()=>{ setbathsower(true)}} onPointerLeave={()=>{setbathsower(false)}} >BATH & SHOWER</div>
                  <div onPointerEnter={()=>{ setmoisturizers(true)}} onPointerLeave={()=>{setmoisturizers(false)}} >MOISTURIZERS</div>
                  <div onPointerEnter={()=>{ setfragranceshow(true)}} onPointerLeave={()=>{setfragranceshow(false)}} >FRAGRANCE</div>
                  <div onPointerEnter={()=>{ setaromatherapy(true)}} onPointerLeave={()=>{setaromatherapy(false)}} >AROMATHERAPY</div>
                  <div onPointerEnter={()=>{ setfeature(true)}} onPointerLeave={()=>{setfeature(false)}} >FEATURE</div>
                  <div onPointerEnter={()=>{ setexplore(true)}} onPointerLeave={()=>{setexplore(false)}} >EXPLORE</div>
                </div>
                <div>
                      {
                        bathshower?
                        <>
                           
                            <ul>
                                <li>All Bath & Shower</li>
                                <li>Body Wash & Shower Gel</li>
                                <li>Body Scrub</li>
                                <li>Body Soap</li>
                                <li>Bar Soap</li>
                                <li>Bath Accessories</li>
                            </ul>
                           
                        </>
                        :""
                      }
                       {
                        moisturizers?
                        <>
                           
                            <ul>
                                <li>All Moisturizers</li>
                                <li>Body Lotion</li>
                                <li>Body Cream</li>
                                <li>Hand Cream</li>
                                <li>Lip Gloss & Blams</li>
                                
                            </ul>
                           
                        </>
                        :""
                      }
                       {
                        fragranceshow?
                        <>
                           
                            <ul>
                                <li>All Fragrance</li>
                                <li>Body Sprays & Mists</li>
                                <li>Perfume & Cologne</li>
                                
                            </ul>
                           
                        </>
                        :""
                      }
                       {
                        aromatherapy?
                        <>
                           
                            <ul>
                                <li>All Aromatherapy</li>
                                <li>Body Wash & Shower Gel</li>
                                <li>Moisturizers</li>
                                <li>Mists & Sprays</li>
                                
                            </ul>
                           
                        </>
                        :""
                      }
                       {
                        feature?
                        <>
                           
                            <ul>
                                <li>Retired Fragrance</li>
                                <li>Travel Size</li>
                                
                            </ul>
                           
                        </>
                        :""
                      }
                       {
                        explore?
                        <>
                           
                           
                        </>
                        :""
                      }
                </div>
              </div>
              <div>
                <div> 
                   <p>BODY CARE OFFERS</p>
                   <p>$4.95 Select Body Care</p>
                   <p>75% Off Select Body Care</p>
                   <p>All Sale Body Care</p>
                </div>
              </div>
              
            </div>
          </div>
          : 
          ""
        }
         {
          candles?<div onMouseLeave={()=>{setcandles(false)}} style={{width:'100%',height:'auto',padding:'0 0 0 20px'  ,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
             <div className='offerdiv'> 
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
          </div>
          : 
          ""
        }
         {
          fragrance?<div onMouseLeave={()=>{setfragrance(false)}} style={{width:'100%',height:'auto',padding:'0 0 0 20px'  ,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
             <div className='offerdiv'> 
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
          </div>
          : 
          ""
        }
         {
          soapssani?<div onMouseLeave={()=>{setsoapssani(false)}} style={{width:'100%',height:'auto',padding:'0 0 0 20px'  ,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
             <div className='offerdiv'> 
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
          </div>
          : 
          ""
        }
         {
          mens?<div onMouseLeave={()=>{setmens(false)}} style={{width:'100%',height:'auto',padding:'0 0 0 20px'  ,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
             <div className='offerdiv'> 
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
          </div>
          : 
          ""
        }
         {
          gifts?<div onMouseLeave={()=>{setgifts(false)}} style={{width:'100%',height:'auto',padding:'0 0 0 20px' ,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
             <div className='offerdiv'> 
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
          </div>
          : 
          ""
        }
         {
          bestseller?<div onMouseLeave={()=>{setbestseller(false)}} style={{width:'100%',height:'auto',padding:'0 0 0 20px'  ,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
             <div className='offerdiv'> 
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
          </div>
          : 
          ""
        }
        <hr/>
    </div>
  )
}

export default Navbar