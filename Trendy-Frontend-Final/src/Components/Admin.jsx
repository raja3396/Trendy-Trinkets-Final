import { useEffect } from "react"
import AdminHeader from "./AdminHeader"
import { useNavigate } from "react-router-dom";
import AdminValidate from "./AdminValidate"
export default function Admin()
{

 
  return(
    <>
    <AdminHeader/>
      <div className="admin-main">
        <h1>Welcome Admin</h1>
      </div>
    </> 
    
  )
}