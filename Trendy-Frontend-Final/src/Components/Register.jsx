import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "./Header"
import SellerHeader from "./SellerHeader"
import HomePageHeader from "./HomePageHeader"
export default function Register(){

    const[message,setMessage]=useState({
        type:'',
        text:''
    })

    const[details,setDetails]=useState({
        customerName:'',
        customerEmailId:'',
        password:'',
        customerPhoneNumber:''
    })
    function inputhandle(event){
        // console.log(event.target.value)
        setDetails((prevdetails)=>{
            return{...prevdetails,[event.target.name]:event.target.value}
        })
    }
    function Submit(event){
        event.preventDefault();
        console.log(details);
        
        fetch("http://localhost:8095/register",{
            method:"POST",
            body:JSON.stringify(details),
        
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=>{
        
            console.log(response); 
            if(response.status == 400 ){
                setMessage({type:"error",text:"Already Email Existed Please Try with Another Email"})
            }
            else if(response.status==200){
                
                setMessage({type:"success",text:"Successfully registered with Trinky Trinkets"})
                
                setDetails({
                    customerName:'',
                    customerEmailId:'',
                    password:'',
                    customerPhoneNumber:''
                    
                })
                
                setTimeout(()=>{
                    setMessage({type:"invisible",text:"dummy"})
                },3000)
                return response.json()
                
            
            }
    
           
        })
       .then((data)=>{
        console.log(data);
       })
       .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <>
        <HomePageHeader/>
        <div className="form-input">
            <form className="form-text r" onSubmit={Submit}>
                <input className="inp"name="customerName" type="name"onChange={inputhandle} required placeholder="Enter ur name" value={details.customerName}/>
                <input className="inp" name="customerEmailId"type="email"onChange={inputhandle} placeholder="Enter ur email" required value={details.customerEmailId} />
                <input className="inp" name="password" type="password" minLength={4} maxLength={8} onChange={inputhandle} placeholder="Enter ur password"required value={details.password}  />
                <input  className="inp" name="customerPhoneNumber"type="number" maxLength="10"   onChange={inputhandle} placeholder="Enter mobile number"required value={details.customerPhoneNumber}  />
                <button className="btm">Register</button>
                <p className="reg">Already Registered ?<Link to={'/slogin'} className="link-log"> Login</Link></p>
                <p className={message.type}>{message.text}</p>
            </form>

        </div>
        </>
       
    )
}