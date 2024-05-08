import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";
import { useContext, useState } from "react";
export default function AddCart({cartitems}){
    console.log(cartitems);
    const cartloggedacess=useContext(UserContext);
    // get customerid/cartid from local storage call based on ur localstorage customer id
    // let cartid=cartloggedacess.customerid 
    const count=useContext(CartContext);
    console.log(cartloggedacess.acess);
    const[cart,setCart]=useState([]);
    const user  = JSON.parse(localStorage.getItem('user'));

    const navigate=useNavigate();
    console.log(cart);

    function carthandle(id){
     if(user){
        console.log("product Id is ",cartitems.productId);
        console.log("Customer Id is ",cartloggedacess.loggedUser.customerId);
        if(count.cartbutton=="Add to cart"){
          setCart(id)
        // we can change the  fetch  based on addcart api with customerid/cartid
         fetch(`http://localhost:8095/cart/${cartitems.productId}/${cartloggedacess.loggedUser.customerId}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                 "Authorization":"Bearer "+cartloggedacess.loggedUser.token
            }
            
        })
        .then((response)=>response.json())
        .then((cartitem)=>{
            console.log(cartitem);
            if(cartitem.length!=0){
                alert("product added into the cart");
                count.setCartcount((prev)=>prev+1);
                localStorage.setItem('cartcount',count.cartcount+1)
                count.setCartbutton('Go to cart');
                // localStorage.setItem('cartbutton',JSON.stringify(count.setCartbutton('Go to cart')))
            }
        })
        .catch((err)=>{
            console.log(err)
        })
      }
      else{
        navigate('/carts')
      }
    }
    else{
        navigate('/slogin')
    }
    }
   
    return(
        
        <button  className="cart" onClick={()=>{
            carthandle(cartitems)
        }}> {count.cartbutton} </button>
    )
}