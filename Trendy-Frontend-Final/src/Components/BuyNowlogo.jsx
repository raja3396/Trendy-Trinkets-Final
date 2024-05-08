import { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom"
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
export default function BuyNowlogo({cartitems}){
    console.log(cartitems);
    const orderlogged=useContext(UserContext);
    // here  we get orderid from local storage with name of customer id
    // let orderid=orderlogged.customerid
    console.log(orderlogged.acess);
    console.log(orderlogged);
    const user = JSON.parse(localStorage.getItem('user'));
    const[order,setOrder]=useState([]);

    const navigate=useNavigate();
    console.log(order);

    function orderhandle(id){
        if(user){
           console.log("product Id is ",cartitems.productId);
           console.log("Customer Id is ",orderlogged.loggedUser.customerId);
           // we can change the  fetch  based on addcart api with customerid/cartid
           localStorage.setItem('productId',cartitems.productId);
           navigate('/buynow');
         }
       else{
           navigate('/slogin')
       }
       }
   
    return(
        
        <button  className="buy" onClick={()=>{
            orderhandle(cartitems.productId);
        }}> Buy Now </button>

        
    )
}