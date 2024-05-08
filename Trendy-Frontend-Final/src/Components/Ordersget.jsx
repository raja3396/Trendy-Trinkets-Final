import { CartContext } from "../contexts/CartContext";
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext";
import { useState,useEffect } from "react";
import TrackPageHeader from "./TrackPageHeader"
export default function Ordersget(){
    const cartdelete=useContext(CartContext);
  const orderacess=useContext(UserContext);
//   let customerid=orderacess.customername/id
  console.log(cartdelete.cartcount);
    const[orderdata,setOrderdata]=useState([]);
   useEffect(()=>{
    // here we fetch based on customerid/orderid
      fetch(`http://localhost:8095/order/${orderacess.loggedUser.customerId}`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
           "Authorization":"Bearer "+orderacess.loggedUser.token
      }
      })
      .then((response)=>response.json())
      .then((data)=>{
        if(data.length!=0){
          console.log(data);
          setOrderdata(data)
        }
      })
      .catch((err)=>{
        console.log(err)
      })

   },[])
    return(
      <>
            <TrackPageHeader/>
            <div className="carts">
              {
                orderdata.length==null?(
                  <p className="cart-empty">Order items are empty please buy ur products</p>
                
              ):(
                orderdata.map((d1)=>{
                  return(
                    <>
                    
                      <div className="order-div-container">
                        <div className="cart-detailsbox " key={d1.product.productId}>
                          <div className="cart-detailbox">
                            <div className="cart-imagebox">
                            <img src={d1.product.productImage1} className="cart-image" alt="" />
                            </div>
                          </div>
                          <div className="cart-details">
                            <p className="cart-title">{d1.product.productName}</p>
                            <p className="cart-price">₹ {d1.product.productCost}</p>
                          </div>
                          <div className="order-date-div">
                            <p>Ordered Date</p>
                            <p>{d1.createdAt}</p>

                          </div>

                        </div>
                      </div> 
                      </> 
                  )
                })
              )
                
              }
            </div>
        </>
    )
}