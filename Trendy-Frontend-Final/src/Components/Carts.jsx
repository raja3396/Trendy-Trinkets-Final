import { CartContext } from "../contexts/CartContext";
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import TrackPageheader from "./TrackPageHeader"
export default function Carts(){
  const cartdelete=useContext(CartContext);
  const cartacess=useContext(UserContext);
  let customerid=cartacess.loggedUser.customerId;
  console.log(cartdelete.cartcount);
    const[cartdata,setCartdata]=useState([]);
    const [cartval,setCartVal] = useState(1);
    // const[quantity,setQuantity]=useState([1]);
   useEffect(()=>{
    // here we fetch based on customerid/cartid
      fetch(`http://localhost:8095/cart/${customerid}`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
           "Authorization":"Bearer "+cartacess.loggedUser.token
      }
      })
      .then((response)=>response.json())
      .then((data)=>{
        if(data.length!=0){
          console.log(data);
          setCartdata(data)
        }
      })
      .catch((err)=>{
        console.log(err)
      })

   },[cartval])
   function removefromcart(id){
    if(id!=null){
      fetch(`http://localhost:8095/cart/${id}/${customerid}`,{
      method:"delete",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+cartacess.loggedUser.token
    }
    })
    .then((response)=>response.json())
    .then((data1)=>{
      console.log(data1);
      if(data1!=0){
        setCartdata([]);
        alert("product removed from cart item");
        // alert(data1._id)
        cartdelete.setCartcount((prev)=>prev-1);
        localStorage.setItem('cartcount',cartdelete.cartcount-1);
        setCartVal(cartval+1);

      }
    })
    .catch((err)=>{
      console.log(err)
    })
    }
   }
   
   
    return(
      <>
        <TrackPageheader/>
        <div className="carts">
          {
            cartdata.length==null?(
              <p className="cart-empty">Cart Items is Empty please add ur products in the cart</p>
             
          ):(
            cartdata.map((d1)=>{
              return(
                <div className="order-div-container">
                  <div className="cart-detailsbox" key={d1.product.productId}>
                    <div className="cart-detailbox">
                      <div className="cart-imagebox">
                      <Link to={`/singleproduct/${d1.id}`}><img src={d1.product.productImage1} className="cart-image" alt="" /></Link> 
                      </div>
                    </div>
                    <div className="cart-details">
                      <p className="cart-title">{d1.product.productName}</p>
                      <p className="cart-price">$ {d1.product.productCost}</p>
                      {/* <input className="quantity" onChange={Addcart} type="number" placeholder="Enter ur quantity" /> */}
                      <div className="cart-buttons">
                        <button className="btm" key={d1.product.productId} onClick={()=>{
                          removefromcart(d1.product.productId)
                        }} >Remove from cart</button>
                      <Link to={`/buynowcart/${d1.product.productId}`}>
                          <input className="btm cart-buy" type="submit" value="Buy Now"/>
                      </Link>
                      </div>

                    </div>

                  </div>
                </div>
              )
          })
            )
             
          }
        </div>
        </>
    )
}