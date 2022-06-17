import { Link } from 'react-router-dom'
import React from 'react'
// import { useState , useEffect} from 'react'
import './Productcard.css'
import Productpage from '../../productpage/Productpage'

const Productcard = ({
    image,name,price,lastprice,discountprice,rating,id,addtobag
}) => {


// const [item,setitem] =useState({})
    
    
    
    
        // const addtobag=(id)=>{
        //     localStorage.setItem("id",JSON.stringify(id))
        // }
     
  
    
  return (
    <>
    
    <div className='carddiv'>
        <div>
        <Link to='/productpage' onClick={<Productpage id={id}/>}>
            <img src={image} alt={name} />
            </Link>
        </div>
        <div className='productname'>
            <h3>{name}</h3>
        </div>
        <div className='producttype'>{price}</div>
        <div className='pricediv'>
            <p>{lastprice}</p>
            <p>${discountprice}</p>
        </div>
        <button onClick={(e)=>addtobag(id)}>ADD TO BAG</button>
        <p style={{fontSize:'13px', marginLeft:'130px', marginTop:'10px'}}>Rating: {rating}</p>
    </div>
   
    </>
  )
}

export default Productcard