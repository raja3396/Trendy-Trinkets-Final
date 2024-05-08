import { useState,useContext } from "react"
import { useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import { AdminContext } from "../contexts/AdminContext";

export default function AdminLogin()
{
  const loggedAdmin = useContext(AdminContext);
  const navigate = useNavigate();
  const [uname,setUname] = useState('');
  const [password,setPassword] = useState('');


  function handleSubmit()
  {
    if(uname=="admin"&&password=="admin123")
    {
        console.log("Welcome admin");
        localStorage.setItem('admin',true);
        navigate("/admin");
    }
    else{
      alert("Username/Password is incorrect!!");
    }
  }
  return(
    <>
    <AdminHeader/>
    <section className="s-container">
      <form className="s-form" onSubmit={handleSubmit}>
          <div className="seller-heading">
            <h3>Enter Your details</h3>
          </div> 
            <input type="text" className="s-inp" required placeholder="Username" onChange={(event)=>setUname(event.target.value)} name="customerEmailId" value={uname}/>
            <input type="password" className="s-inp" required placeholder="Password" onChange={(event)=>setPassword(event.target.value)} name="password" value={password}/>
            <button className="s-btn">Login</button>
        </form>
    </section>
    </>
  )
}