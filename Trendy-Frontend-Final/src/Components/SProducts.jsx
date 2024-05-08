import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddProductHeader from "./AddProductHeader";
import { SellerContext } from "../contexts/SellerContext";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import SProductsHeader from "./SProductsHeader";

export default function SProducts()

{
  const navigate = useNavigate();
  const [products,setProducts] = useState([]);
  // const [id,setId] = useState('');
  const [productName,setProductName] = useState('');
  const [productCost,setProductCost] = useState('');
  const [productImage1,setProductImage1] = useState('');
  const [description,setDescription] = useState('');
  const [category,setCategory]= useState('');
  const [cval,setCval] = useState(0);
  const sellerData = useContext(SellerContext);
  const [sellId,setSellId] = useState(sellerData.loggedSeller.sellerId);

 
  let loggedData = useContext(UserContext);
  const [cId,setCId] = useState(loggedData.loggedUser.customerId);
  useEffect(()=>{
      if((loggedData.loggedUser.isSellerOrNot)==true)
      {

        axios.get("http://localhost:8095/getsellerProducts/"+sellId)
        .then(res=>{
          console.log(res.data);
          setProducts(res.data)
        }).catch(err=>console.log(err))
      }
    else{
      navigate("/sregister");
        console.log("falseeee");
     
    }
  },[cval])

  const updateProduct = (productId) =>{  
    const url = "http://localhost:8095/seller/"+sellId+"/"+productId;
    const body = {
      "productName":productName || null,
      "productCost":productCost || null,
      "category":category || null,
      "productImage1":productImage1 || null,
      "description":description || null

    }
    console.log("url is "+url);
    console.log(body);
    axios.put(url,body)
    .then(res=>{
      console.log(res.status);
      console.log(res.data);
      alert("Product Updated")
      setCval(cval+1);
    }).catch(err=>{
      console.log(err);
    })
  }
  
  const deleteProduct = (productId)=>{
    axios.delete("http://localhost:8095/seller/"+productId+"/"+cId)
    .then(res=>{
      alert("Product deleted");
      setCval(cval+1);
    }).catch(err=> console.log(err))
  }




  return(
    <>
    <SProductsHeader/>
    <div className="s-products-container">
    <h3 className="seller-heading s-p-heading">Products</h3>
    <table className="products-table">
      <tbody>
      <tr className="t-row">
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>Image Url</th>
        <th>Description</th>
      </tr>

      {
        products.map(product =>(
          <tr className="t-row" key={product.productId}>
            <td><input type="text" className="s-inp-2 id-field" name="id" readOnly defaultValue={product.productId}/></td>           
            <td><input className="s-inp-2" type="text" name="productName" onChange={e=>{setProductName(e.target.value)}} defaultValue={product.productName}/></td>
            <td><input className="s-inp-2 s-inp-price" type="text" name="productCost" onChange={e=>{setProductCost(e.target.value)}} defaultValue={product.productCost}/></td>
            <td><input className="s-inp-2" type="text" name="category" onChange={e=>{setCategory(e.target.value)}} defaultValue={product.categoryType.categoryName}/></td>
            <td><input className="s-inp-2" type="text" name="productImage1" onChange={e=>{setProductImage1(e.target.value)}} defaultValue={product.productImage1}/></td>
            <td><textarea className="s-inp-2" type="text" name="description" onChange={e=>{setDescription(e.target.value)}} defaultValue={product.description} rows={3} cols={20}></textarea></td>
            <td><input className="s-btn" type="submit" value="UPDATE" onClick={e=>{updateProduct(product.productId)}}/></td>
            <td><input className="s-btn" type="submit" value="Delete" onClick={e=>{deleteProduct(product.productId)}}/></td>
            <td>
            <Link to={`/viewProduct/${product.productId}`}>
             <input className="s-btn" type="submit" value="View"/>
            </Link>
            </td>
          </tr>
        ))
      }
      </tbody>
    </table>
    </div>
    
   
    
    
    </>
  ) 

    }