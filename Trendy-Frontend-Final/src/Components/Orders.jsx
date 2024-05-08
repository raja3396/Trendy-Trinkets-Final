import { useContext, useEffect, useState } from "react"
import AdminHeader from "./AdminHeader";
import { UserContext } from "../contexts/UserContext";

export default function Orders()
{
  const loggedData = useContext(UserContext);
  const [orders,setOrders]= useState([]);

  useEffect(()=>{
    fetch("http://localhost:8095/admin_only/getAllOrder",{
    method:"GET",  
    headers:{
        "Content-Type":"application/json",
         "Authorization":"Bearer "+loggedData.loggedUser.token
    }
    })
    .then(response=>response.json())
    .then(data=>{
      setOrders(data);
      console.log(data)
    })
    .catch(error=>console.log(error));
  },[]);
  return(
    <>
      <AdminHeader/>
      <div className="admin-users-container">
          <div className="s-products-container">
          <h3 className="seller-heading user-heading">All Orders</h3>
          <table className="seller-table">
          <tbody>
          <tr className="t-row">
            <th>ID</th>
            <th>Product Name</th>
            <th>Price </th>
            <th>Customer Id</th>
            <th>Customer Name</th>
            <th>Ordered Date </th>
            
          </tr>

          {
            orders.map(order =>(
              <tr className="t-row" key={order.orderId}>
                <td><input type="text" className="s-inp-2 id-field" name="id" readOnly defaultValue={order.orderItemId}/></td>           
                <td><input className="s-inp-2" type="text" name="name" readOnly defaultValue={order.product.productName}/></td>
                <td><input className="s-inp-2" type="text" name="price" readOnly defaultValue={order.product.productCost}/></td>
                <td><input className="s-inp-2 id-field" type="text" name="Customer Id" readOnly defaultValue={order.order.customer.customerId}/></td>
                <td><input className="s-inp-2" type="text" name="Customer Name" readOnly defaultValue={order.order.customer.customerName}/></td>
                <td><input className="s-inp-2" type="text" name="phoneNumber" readOnly defaultValue={order.createdAt}/></td>
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