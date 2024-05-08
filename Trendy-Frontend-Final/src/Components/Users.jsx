import { useContext, useEffect, useState } from "react"
import AdminHeader from "./AdminHeader";
import { UserContext } from "../contexts/UserContext";

export default function Users()
{
  const loggedData = useContext(UserContext);
  const [users,setUsers]= useState([]);

  useEffect(()=>{
    fetch("http://localhost:8095/admin_only/getAllUser",{
    method:"GET",  
    headers:{
        "Content-Type":"application/json",
         "Authorization":"Bearer "+loggedData.loggedUser.token
    }
    })
    .then(response=>response.json())
    .then(data=>{
      setUsers(data);
      console.log(data)
    })
    .catch(error=>console.log(error));
  },[]);
  return(
    <>
      <AdminHeader/>
      <div className="admin-users-container">
          <div className="s-products-container">
          <h3 className="seller-heading user-heading">Customers</h3>
          <table className="seller-table">
          <tbody>
          <tr className="t-row">
            <th>ID</th>
            <th>Name</th>
            <th>Email </th>
            <th>Phone Number</th>
            
          </tr>

          {
            users.map(user =>(
              <tr className="t-row" key={user.customerId}>
                <td><input type="text" className="s-inp-2 id-field" name="id" readOnly defaultValue={user.customerId}/></td>           
                <td><input className="s-inp-2" type="text" name="name" readOnly defaultValue={user.customerName}/></td>
                <td><input className="s-inp-2" type="text" name="email" readOnly defaultValue={user.customerEmailId}/></td>
                <td><input className="s-inp-2" type="text" name="phoneNumber" readOnly defaultValue={user.customerPhoneNumber}/></td>
              </tr>
            ))
          }
          </tbody>
        </table>
        </div>
      </div>
    </>
    
    
  )
}