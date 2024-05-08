import { useContext, useEffect, useState } from "react"
import TrackPageHeader from "./TrackPageHeader"
// import Productsheader from "./Productsheader"
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
export default function Buynow(){
    const[product,setProduct]=useState('');
    const orderlogged = useContext(UserContext);
    const [address,setAddress] = useState('');
    const [alert,setAlert] = useState(false);
    const navigate = useNavigate();
    let productId=(localStorage.getItem('productId'));
    
    console.log("product id in summary page ",productId);

    useEffect(()=>{
        fetch(`http://localhost:8095/getProduct/${productId}`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setProduct(data);
        }).catch(error=>console.log(error));
        
    },[])
   
    function handleInput(event)
    {
        setAddress(event.target.value);
        console.log(event.target.value);
    }
    function orderhandle(){
       if(address.trim()=='')
       {
            setAlert(true);
            setTimeout(()=>{
                setAlert(false);
            },5000)
       }
       else{
        
        fetch(`http://localhost:8095/order/${orderlogged.loggedUser.customerId}/${productId}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                 "Authorization":"Bearer "+orderlogged.loggedUser.token
            }
            
        })
        .then((response)=>response.json())
        .then((cartitem)=>{
            console.log(cartitem);
            navigate('/order');
        })
        .catch((err)=>{
            console.log(err)
        })
       }
    }
    return(
        <>
            <TrackPageHeader/>
            <div className="order-now-container">
                <div className="order-now-box">
                    <div className="address">
                        <h3 className="seller-heading address-heading">Add Address</h3>
                        <textarea name="address" className="address-inp" required cols="55" rows="8" onChange={handleInput}></textarea>
                    </div>
                    <div className="error-msg-div">
                        {alert && <h2>Add Dlivery Address to place Order</h2>}
                    </div>
                </div>


                <div className="order-now-box order-summary">
                    <div className="order-summary-div">
                        <div className="seller-heading address-heading"> Order Summary</div>
                        <div className="summary-container">
                            <div className="summary-image"><img src={product.productImage1} alt="Product-Image" /></div>
                            <div className="summary-details">
                                <div className="summary-box">
                                    <p>Name :</p>
                                    <h4>{product.productName}</h4>
                                </div>
                                <div className="summary-box">
                                    <p>Price :</p>
                                    <h4>{product.productCost}</h4>
                                </div>
                                <div className="summary-box">
                                    <p>Delivery Charge :</p>
                                    <h4>Free Delivery</h4>
                                </div>
                            </div>
                        </div>

                        <div className="place-order-div">
                            <button className="s-btn place-order-btn" onClick={orderhandle}>Place Order</button>
                        </div>
                        

                    </div>

                </div>

            </div>
    
    
            </>
    )
}