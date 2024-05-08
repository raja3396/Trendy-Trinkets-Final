import { useContext, useState } from "react";
import SellerHeader from "./SellerHeader";
import { Link,useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Footer from "./Footer"
import HomePageHeader from "./HomePageHeader";

export default function SellerLogin()
{

  const loggedData = useContext(UserContext);
  const navigate = useNavigate();
  const [userCreds,setUserCreds] = useState({
    customerEmailId:"",
    password:""
  })
  const [message,setMessage] = useState({
    type:'',
    text:''
  })

  function handleInput(event)
  {
    setUserCreds((prevState)=>{
      return {...prevState,[event.target.name]:event.target.value}
    })
  }

  function handleSubmit(event)
  {
    event.preventDefault();

    console.log(userCreds);

    fetch("http://localhost:8095/login",{

    method:"POST",
    body:JSON.stringify(userCreds),
    headers:{
        "Content-Type":"application/json"
    }
    })
    .then((response)=>{
      if(response.status===400)
      {
        setMessage({type:'error',text:'Email/password is wrong'});
      }
      else if(response.status===200)
      {
        setMessage({type:'success',text:'User Login successful'});
        setUserCreds({
          customerEmailId:"",
          password:""
        })
        setTimeout(()=>{
          setMessage({type:"invisible",text:"dummy"});
        },5000)
      }

      return response.json();
    })
    .then((data)=>{
      if(data.token!=undefined)
      {
        localStorage.setItem("user",JSON.stringify(data));
        loggedData.setLoggedUser(data);
        console.log(data);
        navigate("/sellertrack")
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    

    <div className="login-page">

      <HomePageHeader/>
    <div className="login">
        <div className="forms">
            <div className="form-text">
                <h1 className="form-heading">Welcome to Trendy-Trinkets</h1>
                <h3 className="form-login">Login</h3>
                <h5 className="form-acess">Get access to your Orders, Wishlist and Recommendations</h5>
                <img src="https://www.bingocycles.com/images/login_img.png" alt="" />

            </div>
            <form className="form-inp" onSubmit={handleSubmit}>
                <input className="inp" type="email" onChange={handleInput} name="customerEmailId" placeholder="Enter email" required  value={userCreds.email} />
                <input className="inp" type="password"  onChange={handleInput} name="password" placeholder="Enter password" required  value={userCreds.password} />
                <button className="btm" >Login</button>
                <p className="regs">Don't have account?<Link to={'/register'} className="link-reg">Register here</Link></p>
                <p className={message.type}>{message.text}</p>
            </form> 
            
             
        </div>
        

    </div>
    
      <Footer/>
    
    </div>
  )
}