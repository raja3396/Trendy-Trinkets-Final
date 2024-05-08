import { useState } from "react";
import { Link,json,useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { SellerContext } from '../contexts/SellerContext'
import TrackPageHeader from "./TrackPageHeader";
import Modal from "./Modal";


export default function SellerRegister()
{

  let loggedData = useContext(UserContext);
  const sellerData = useContext(SellerContext);
  const [cId,setCId] = useState(loggedData.loggedUser.customerId);
  const [showModal,setShowModal] = useState(false);
  const navigate = useNavigate();

  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user'))||{});

  const [sellerDetails,setSellerDetails] = useState({
    sellerName:"",
    gstNo:"",
    sellerPhoneNumber:""
  })
  const [alert,setAlert] = useState(false);
  const [message, setMessage] = useState('');


  function updateIsSeller(value)
  {
    const updatedUser = {...user, isSellerOrNot:value};
    localStorage.setItem('user',JSON.stringify(updatedUser));
    setUser(updatedUser);
  }

  function handleInput(event)
  {
    setSellerDetails((prevState)=>{
      return {...prevState,[event.target.name]:event.target.value};
    })
  }

  function validateGstNumber(gst)
  {
    const gstRegex = /^GST\d{7}$/;
    return gstRegex.test(gst);
  }

  function handleSubmit(event)
  {
    event.preventDefault();
    if(!validateGstNumber(sellerDetails.gstNo))
    {
      console.log("Error");
      setAlert(true);
      setTimeout(()=>{
        setAlert(false);
      },3000)
      // setMessage("GST number is not valid! Please enter a 10-character string starting with 'GST' followed by 7 digits.");
      //  alert(JSON.stringify(message));
      //  return;
    }
    else{
      fetch("http://localhost:8095/sellerRegister/"+cId,{
        method:"POST",
        body:JSON.stringify(sellerDetails),
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then((response)=>{
        response.json();
        console.log("status ",response.status);
        if(response.status==200)
        {
            updateIsSeller(true);
            setShowModal(true);  
            setTimeout(()=>{
              setShowModal(false);
              localStorage.removeItem("user");
              loggedData.setLoggedUser(null);
              localStorage.removeItem("seller");
              sellerData.setLoggedSeller(null);
              navigate("/slogin");
            },5000)
        }
        else{
          console.log("Failed to register as seller")
        }
      })
      .then((data)=>{
        console.log(data);     
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    console.log(sellerDetails);
    console.log(loggedData.loggedUser.customerId); 
    
  }

    // function handleModalOk()
    // {
    //   localStorage.removeItem("user");
    //   loggedData.setLoggedUser(null);
    //   localStorage.removeItem("seller");
    //   sellerData.setLoggedSeller(null);
    //   navigate("/")
    // }
    // function handleModalClose()
    // {
    //   setShowModal(false);
    //   localStorage.removeItem("user");
    //   loggedData.setLoggedUser(null);
    //   localStorage.removeItem("seller");
    //   sellerData.setLoggedSeller(null);
    //   navigate("/")
    // }
  return (
    <>
      <TrackPageHeader/>
      <section className="s-container">
        
        <form className="s-form" onSubmit={handleSubmit}>
          <div className="seller-heading">
            <h3>Enter Your details</h3>
          </div> 
            <input type="text" className="s-inp" required placeholder="Seller Name" onChange={handleInput} name="sellerName" value={sellerDetails.sellerName}/>
            <input type="text" className="s-inp"  required placeholder="Mobile Number" onChange={handleInput} name="sellerPhoneNumber" value={sellerDetails.sellerPhoneNumber}/>
            <input type="text" className="s-inp" required placeholder="GST Number" onChange={handleInput} name="gstNo" value={sellerDetails.gstNo}/>
            <button className="s-btn" onClick={handleSubmit}>Register</button>
            <p>Already Registered ? <Link to='/slogin'>Login</Link></p>

            <div className="error-msg-div">
                        {alert && <h2>gst number should have "GST" followed by 7 digits</h2>}
                    </div>

            
           
            


        </form>
        {showModal && <Modal/>}


      </section>
    
    </>
  )
  }
