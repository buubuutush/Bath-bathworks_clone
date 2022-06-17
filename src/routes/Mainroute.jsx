import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainBody from '../home-components/body/mainbody/Mainbody'
import Cart from '../home-components/cart/Cart'
import Allsale from '../home-components/pages/Allsale'
import BestSeller from '../home-components/pages/BestSeller'
import Bodycare from '../home-components/pages/Bodycare'
import Candles from '../home-components/pages/Candles'
import Gifts from '../home-components/pages/Gifts'
import Homefragrance from '../home-components/pages/Homefragrance'
import Mens from '../home-components/pages/Mens'
import Soapssani from '../home-components/pages/Soapssani'
import Profile from '../home-components/profile/Profile'
import Singup from '../home-components/profile/Singup'
import Productpage from '../productpage/Productpage'

const Mainroute = () => {
  return (
   <Routes>

    <Route path="/*" element={<MainBody/>}/>
    <Route path='allsale/' element={<Allsale/>}/>
    <Route path='bodycare/' element={<Bodycare/>}/>
    <Route path='candles/' element={<Candles/>}/>
    <Route path='homefragrance/' element={<Homefragrance/>}/>
    <Route path='soapssani/' element={<Soapssani/>}/>
    <Route path='mens/' element={<Mens/>}/>
    <Route path='gifts/' element={<Gifts/>}/>
    <Route path='bestseller/' element={<BestSeller/>}/>
    <Route path='cart/' element={<Cart/>}/>
    <Route path='profile/' element={<Profile/>}/>
    <Route path='singup/' element={<Singup/>}/>
    <Route path='productpage/' element={<Productpage/>}/>
   </Routes>
  )
}

export default Mainroute