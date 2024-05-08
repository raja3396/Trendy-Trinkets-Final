import {useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Footer from "./Footer"
// import{Usercontexthome} from "../contexts/UserContextHome"
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react"
// import Productsheader from "./Productsheader"
import SellerHeader from "./SellerHeader"
export default function Login(){
    const loggedin=useContext(UserContext)
    const navigate=useNavigate();
    const[logindetails,setLogindetails]=useState({
        customerEmailId:'',
        password:''
    })
    const[message,setMessage]=useState({
        type:'',
        text:''
    })
   
    function formhandle(event){
        console.log(event.target.value);
        setLogindetails((prevdetails)=>{
            return{...prevdetails,[event.target.name]:event.target.value}
        })
    }
  
    function submit(event){
        event.preventDefault();
        console.log(logindetails)
       fetch("http://localhost:8000/login",{
        method:"POST",
        body:JSON.stringify(logindetails),
        headers:{
            "Content-Type":"application/json"
        }
       })
       .then((response)=>{
        
        console.log(response); 
        if(response.status=="404"){
            setMessage({type:"error",text:"email is wrong"})

        }
        else if(response.status==403){
            setMessage({type:"error",text:"incorrect password"})
        }
        else if(response.status==201){
            setMessage({type:"sucess", text:"user login sucessfully"})
            setLogindetails({
                customerEmailId:'',
                password:''
            })
            setTimeout(()=>{
                setMessage({type:"invisible",text:"dummy"})
    
            },5000)
            return response.json()
        
        }
       })
       .then((data) => {
        console.log(data);
       if(data.message!=null){
           localStorage.setItem('trendytoken',JSON.stringify(data));
           localStorage.setItem('trendyemail',JSON.stringify(data.email));
          loggedin.setLoggeduser(data.email)
          loggedin.setAcess(data)
          navigate('/')
       }
       
       })
       .catch((err)=>{
        console.log(err);
       })
    }
   

    return(
        <>
        <SellerHeader/>
        <div className="login">
            <div className="forms">
                <div className="form-text">
                    <h1 className="form-heading">Welcome to Trendy-Trinkets</h1>
                    <h3 className="form-login">Login</h3>
                    <h5 className="form-acess">Get access to your Orders, Wishlist and Recommendations</h5>
                    <img src="https://www.bingocycles.com/images/login_img.png" alt="" />

                </div>
                <form className="form-inp" onSubmit={submit}>
                    <input className="inp" type="email" onChange={formhandle} name="customerEmailId" placeholder="Enter ur email" required  value={logindetails.customerEmailId} />
                    <input className="inp" type="password"  onChange={formhandle} name="password" placeholder="Enter password" required  value={logindetails.password} />
                    <button className="btm" >Login</button>
                    <p className="regs">Don't have account?<Link to={'/register'} className="link-reg">Register here</Link></p>
                    <p className={message.type}>{message.text}</p>
                </form> 
                
                 
            </div>
            

        </div>
        <Footer/>
        </>

    )
}