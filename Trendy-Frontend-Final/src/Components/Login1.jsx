import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "./Header"


export default function Login(){
    // const navigate=useNavigate
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
        console.log(event.target.value);
        event.preventDefault();
        console.log(logindetails)
       fetch("http://localhost:8095/login",{
        method:"POST",
        body:JSON.stringify(logindetails),
        headers:{
            "Content-Type":"application/json"
        }
       })
       .then((response)=>{
        
        console.log(response); 
        if(response.status==404){
            setMessage({type:"error",text:"email is wrong"})

        }
        else if(response.status==403){
            setMessage({type:"error",text:"incorrect password"})
        }
        else if(response.status==200){
            setLogindetails({
                customerEmailId:'',
                password:''


                
            })
            return response.json()
        
        }
        setTimeout(()=>{
            setMessage({type:"invisible",text:"dummy"})

        },5000)

       
    })
       .then((data)=>{
        console.log(data)
        if(data!==undefined){
            console.log(data);
            localStorage.setItem('ecommerce',JSON.stringify(data));
            
        }
        else{
            // navigate('/login');
        }
       
       })
       .catch((err)=>{
        console.log(err);
       })
    }
   

    return(
        <>
        <Header/>
        <div className="login">
            <div className="forms">
                <div className="form-text">

                </div>
                <form className="form-inp" onSubmit={submit}>
                    <input className="inp" type="email" onChange={formhandle} name="customerEmailId" placeholder="Enter ur email" required  value={logindetails.customerEmailId} />
                    <input className="inp" type="password" minLength={8} onChange={formhandle} name="password" placeholder="Enter password" required  value={logindetails.password} />
                    <div className="loginbtnBox">
                    <button className="btm">Login</button>
                    <button className="btm" ><Link className="backtoHomeBtn" to={'/'}>Back to Home</Link> </button>
                    </div>
                    <p className="regs">Don't have account?<Link to={'/register'} className="link-reg">Register here</Link></p>
                    <p className={message.type}>{message.text}</p>
                </form>
                
                 
            </div>
            

        </div>
        </>

    )
}