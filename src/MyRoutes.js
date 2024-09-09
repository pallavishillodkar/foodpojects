import React from 'react'
import { BrowserRouter as  Router , Routes, Route} from 'react-router-dom'
import Home from './Componant/Home';
import AboutUs from './Componant/AboutUs';
import Cart from './Componant/Cart';
import Profile from './Componant/Profile';
import ContactUs from './Componant/ContactUs';
import MyOrders from './Componant/MyOrders';
import Navbar from './MyNavbar';
import Registered from './Componant/Registered';
import Login from './Componant/Login';
import OrderDetails from './Componant/OrderDetails';
import ProtectedRoute from './Componant/ProtectedRoute';
import { useSelector } from 'react-redux';

function MyRoutes() {
  const { isLogin } = useSelector((state)=> state.user)
  return (
    <div>
     <Router>
        <Navbar/>
    
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/registered' element={<Registered/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/profile' element={
            <ProtectedRoute loggedIn={ isLogin}>
               <Profile/>
               </ProtectedRoute>
           }/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/myorders' element={<MyOrders/>}/>
            <Route path='/orderdetails' element={<OrderDetails/>}/>
        </Routes>
     </Router>
    </div>
  )
}

export default MyRoutes