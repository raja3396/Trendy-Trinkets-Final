import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function AdminValidate()
{
  const navigate = useNavigate();
  useEffect(()=>{
    const isAdmin = (localStorage.getItem('admin'));
    if((isAdmin)!=='true')
    {
      navigate("/adminlogin");
    }
  },[])
}