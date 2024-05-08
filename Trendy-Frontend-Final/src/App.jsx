import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import Products from './Components/Products'
import Categories from './Components/Categories'
import Track from './Components/Track'
import Component from './Components/Component'
import SingleProduct from './Components/SingleProduct'
import Buynow from './Components/Buynow'
import Order from './Components/Order'
import { CartContext } from './contexts/CartContext'
// seller imports
import SellerRegister from './Components/SellerRegister'
import SellerLogin from './Components/SellerLogin'
import AddProduct from './Components/AddProduct'
import ViewProduct from './Components/ViewProduct'
import SProducts from './Components/SProducts'
import { useState } from 'react'
import {UserContext} from './contexts/UserContext'
import { SellerContext } from './contexts/SellerContext'
import HomePage from './Components/Home'
import Private from './Components/Private'
//import { Component } from 'lucide-react'
import Modal from './Components/Modal'
import Admin from './Components/Admin'
import Users from './Components/Users'
import Sellers from './Components/Sellers'
import AdminLogin from './Components/AdminLogin'
import SellerTrack from './Components/SellerTrack'
import Trendy from './Components/Trendy'
import Carts from './Components/Carts'
import Profile from './Components/Profile'
import Ordersget from './Components/Ordersget'
import BuyNowCart from './Components/BuyNowCart'
import Orders from './Components/Orders'
import LoginModal from './Components/LoginModal'




function App() {
 
  const[cartbutton,setCartbutton]=useState('Add to cart')
  const[cartcount,setCartcount]=useState(0);
  useEffect(()=>{
    if(localStorage.getItem('cartcount')!==null){
      setCartcount(JSON.parse(localStorage.getItem('cartcount')))
    }
  })
  // 
  const [loggedUser,setLoggedUser] 
    = useState(JSON.parse(localStorage.getItem("user")));

    const [loggedSeller,setLoggedSeller] 
    = useState(JSON.parse(localStorage.getItem("seller")));
 
  return (
    <>
     <UserContext.Provider value={{loggedUser,setLoggedUser}}>
      <CartContext.Provider value={{cartcount,setCartcount,cartbutton,setCartbutton}} >
      <SellerContext.Provider value={{loggedSeller,setLoggedSeller}}>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Trendy/>}/>
        <Route path='/component' element={<Component/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/track/:categoryId' element={<Track/>}/>
        <Route path='/singleproduct/:productId' element={<SingleProduct/>}/>
        <Route path='/carts' element={<Private Component={Carts}/>}/>
        <Route path='/buynow' element={<Private Component={Buynow}/>}/>
        <Route path='/order' element={<Private Component={Order}/>}/>
        <Route path='/userOrders' element={<Ordersget/>}/>

        {/*  */}
        <Route path='/seller' element={<HomePage/>}/>
        <Route path='/sregister' element={<SellerRegister/>}/>
        <Route path='/slogin' element={<SellerLogin/>}/>
        <Route path='/sellertrack' element={<Private Component={SellerTrack}/>}/>
        <Route path='/addProduct' element={<Private Component={AddProduct}/>}/>
        <Route path='/sproducts' element={<Private Component={SProducts}/>}/>
        <Route path='viewProduct/:prodId' element={<Private Component={ViewProduct}/>}/>
        <Route path='buynowcart/:prodId' element={<Private Component={BuyNowCart}/>}/>
        <Route path='/modal' element={<Modal/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/sellers' element={<Sellers/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
      </SellerContext.Provider>
      </CartContext.Provider>
    </UserContext.Provider>
    </>
  )
}

export default App
