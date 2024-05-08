import { useContext, useEffect, useState } from "react"
import TrackPageHeader from "./TrackPageHeader"
import { UserContext } from "../contexts/UserContext"
import { Link } from "react-router-dom";

export default function Profile()

{
  const loggedData = useContext(UserContext);
  const [userDetails,setUserDetails] = useState('');

  useEffect(()=>{
    fetch(`http://localhost:8095/UserByCusomterId/${loggedData.loggedUser.customerId}`)
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      setUserDetails(data);
    }).catch(error=>console.log(error));
  },[])


  return(
    <>
    <TrackPageHeader/>
    {/* <section className="s-container"> */}
        
        {/* <form className="s-form">
          <div className="seller-heading">
            <h3>User Details</h3>
          </div> 
            <input type="text" className="s-inp" required placeholder="Customer Name" readOnly name="Name" defaultValue={userDetails.customerName}/>
            <input type="text" className="s-inp"  required placeholder="Mobile Number" readOnly name="PhoneNumber" defaultValue={userDetails.mobileNumber}/>
            <input type="text" className="s-inp" required placeholder="Email" readOnly name="Email" defaultValue={userDetails.customerEmailId}/>
        </form> */}
        
       <div className="profile-main-box">
       <div className="seller-heading">
            <h3>User Details</h3>
          </div>
            <div className="profile-container">
              <div className="profile-data"> 
                <p>Name :</p>
                <h2>{userDetails.customerName}</h2>
              </div>
              <div className="profile-data"> 
                <p>Email :</p>
                <h3>{userDetails.customerEmailId}</h3>
              </div>
              <div className="profile-data"> 
                <p>Mobile Number :</p>
                <h3>{userDetails.mobileNumber}</h3>
              </div>
              <Link to={"/userOrders"}><button className="s-btn s-add-btn">My Orders</button></Link>
            </div>

           
        </div> 

      {/* </section> */}
    </>
  )
}