import { Link } from 'react-router-dom'
import React from 'react'
import MainBody from '../body/mainbody/Mainbody'
import './Profile.css'
import Singup from './Singup'
const Profile = () => {
  return (
    <>
    <div>
      <img className='firstimg' src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_" alt="" />
    </div>
    <div style={{margin:'auto', width:'70%'}}>
      <h1 className='tagsignup'>Sign In or Sign Up</h1>
      <div style={{height:'1px',width:'100%',background:'black',margin:"auto"}}></div>
    </div>
    <div className='signupsignin'>
      <div className='signin'>
          <h2>SIGN IN</h2>
          <div className='signinemail'>
            <span>Email Address</span>
            <input type="text"  />
          </div>
          <div className='signinpassword'>
            <span>Password</span>
            <input type="text"  />
          </div>
          <div style={{display:'flex', margin:'auto', justifyContent:'space-between' }}>
            <h3 style={{marginRight:'60px', fontSize:'10px',textDecoration:'underline' }}>Forgot Password?</h3>
            <div className='remember' style={{display:'flex', marginRight:'60px' }}>
              <input style={{marginRight:'-70px', marginTop:'12px'}} type="checkbox" />
              <h3 style={{fontSize:'10px'}}>Remember Me</h3>
            </div>
          </div>
          <span style={{ fontSize:'11px',textDecoration:'underline'}}>Privacy Policy</span>
          <button style={{width:'120px',margin:'auto',height:'45px', marginTop:'30px', border:'none', background:'rgb(112, 107, 107)'  }}>
          <Link to="/" onClick={<MainBody/>} style={{textDecoration:'none',color:'white'}}>SING IN</Link>
          </button>
      </div>
      <div style={{ background:'black' }}></div>
      <div className='signup' style={{width:'400px',marginLeft:'-30px', marginTop:'60px' }}>
              <h3>SIGN UP</h3>
              <h4 style={{marginLeft:'60px', fontSize:'17px' }}>Create an account to access the best of your favorite store</h4>
              <img style={{height:'200px' }}src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf946a6ac/images/loyalty/July19/nonloyalty_5thmkt_signuptile_D.png?yocs=s_" alt="" />
              <Link to="/singup" onClick={<Singup/>} >
              <button style={{width:'180px',margin:'auto',height:'45px',color:'white', marginTop:'30px', border:'none', background:'rgb(112, 107, 107)'   }}>SING UP</button>
              </Link>
      </div> 
     
    </div>
    <div style={{marginTop:'90px'}}>
        <p>QUESTIONS?</p>
        <p>We’re here for you! Call us at 1-800-756-5005.</p>
      </div>
    </>
  )
}

export default Profile