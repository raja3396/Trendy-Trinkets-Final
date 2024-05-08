import { useContext, useEffect, useState } from "react"
import AdminHeader from "./AdminHeader";
import { UserContext } from "../contexts/UserContext";

export default function Sellers()
{
  const loggedData = useContext(UserContext);
  const [sellers,setSellers]= useState([]);

  useEffect(()=>{
    fetch("http://localhost:8095/admin_only/getsellerdetails",{
    method:"GET",  
    headers:{
        "Content-Type":"application/json",
         "Authorization":"Bearer "+loggedData.loggedUser.token
    }
    })
    .then(response=>response.json())
    .then(data=>{
      setSellers(data);
      console.log(data)
    })
    .catch(error=>console.log(error));
  },[]);
  return(
    <>
      <AdminHeader/>
      <div className="admin-users-container">
          <div className="s-products-container">
          <h3 className="seller-heading user-heading">Sellers</h3>
          <table className="seller-table">
          <tbody>
          <tr className="t-row">
            <th>ID</th>
            <th>Name</th>
            <th>GST No</th>
            <th>Phone Number</th>
            
          </tr>

          {
            sellers.map(seller =>(
              <tr className="t-row" key={seller.sellerId}>
                <td><input type="text" className="s-inp-2 id-field" name="id" readOnly defaultValue={seller.sellerId}/></td>           
                <td><input className="s-inp-2" type="text" name="sellerName" readOnly defaultValue={seller.sellerName}/></td>
                <td><input className="s-inp-2" type="text" name="gstNo" readOnly defaultValue={seller.gstNo}/></td>
                <td><input className="s-inp-2" type="text" name="phoneNumber" readOnly defaultValue={seller.sellerPhoneNumber}/></td>
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