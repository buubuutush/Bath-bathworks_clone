
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

import Profile from './Profile'
const Singup = () => {
    
    const [inputs,setinputs]= useState({})
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
  const [email, setEmail] =useState('');
  const [phone, setphone] = useState('');
  const [password,setpassword]=useState('')
const [pin,setpin] =useState('')
  


    const handlesubmit = (event) => {
        event.preventDefault();
        
        setinputs({...inputs,fname:firstname,
                                lname:lastname,
                                pass:password,
                                phone:phone,
                                pin:pin,
                                email:email
            })
      }
    //   console.log(inputs)
    useEffect(() => {
        localStorage.setItem('logindetails', JSON.stringify(inputs));
    }, [inputs]);
      
  return (
    <div>
        <div>
            <div>
                <img style={{height:'150px', width:'80%',margin:'auto'}} src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6f07f823/images/banners/create-account_d.png?yocs=s_" alt="" />
            </div>
            <div>
                <h2 className='create'>Create an Account</h2>
                <div style={{height:'1px', width:'80%', background:'black', margin:'auto' }}></div>
            </div>
            <div className='formdiv'>
                <form onSubmit={handlesubmit} className="form">
                    <div>
                    <lable>First Name</lable>
                        <input type="text" id='firstname' value={firstname} onChange={(e)=>setfirstname(e.target.value)} />
                    
                    </div>
                   <div>
                   <lable>Last Name</lable>
                        <input type="text" id='lastname' value={lastname } onChange={(e)=>setlastname(e.target.value)} />
                    
                   </div>
                   <div>
                   <lable>Email</lable>
                        <input type="text" id='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    
                   </div>
                   <div>
                   <lable>Confirm Email</lable>
                        <input type="text"  />
                    
                   </div>
                   <div>
                   <lable>ZIP/Postal Code </lable>
                        <input type="number" id='pin' value={pin } onChange={(e)=>setpin(e.target.value)} />
                   
                   </div>
                   <div>
                   <lable>Phone</lable>
                        <input type="number" id='phone' value={phone } onChange={(e)=>setphone(e.target.value)} />
                    
                   </div>
                    <div>
                    <lable>Password</lable>
                        <input type="text" id='password' value={password } onChange={(e)=>setpassword(e.target.value)} />
                    
                    </div>
                    <Link to='/profile' onClick={<Profile/>}>
                    <input  style={{height:"50px",width:'160px', marginTop:'30px', textDecoration:'none',background:'black', color:'white'}} className='signupbuttonx' type="submit" value='CREATE ACCOUNT' />
                    </Link>
                </form>
                <span style={{fontSize:'14px', marginTop:'60px'  }}>We’re here for you! Call us at 1-800-756-5005.</span>
            </div>
        </div>
    </div>
  )
}

export default Singup