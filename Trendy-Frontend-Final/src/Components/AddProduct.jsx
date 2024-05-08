import { useEffect, useState } from "react";
import AddProductHeader from "./AddProductHeader";
import { UserContext } from "../contexts/UserContext";
import { SellerContext } from '../contexts/SellerContext'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct()
{

  const sellerData = useContext(SellerContext);
  let loggedData = useContext(UserContext);
  // const sellId = sellerData.loggedSeller.sellerId;
  // const [cId,setCId] = useState(loggedData.loggedUser.customerId);
  // const [sDetails,setSDetails] = useState(null);

  const navigate = useNavigate();

    useEffect(()=>{

    // if(localStorage.getItem())
    // {
    //   navigate("/sregister");
    // }
    })

  // useEffect(()=>{
  //   fetch(`http://localhost:8095/getSellerByUserId/${cId}`,{
  //     method:"GET"
  //   })
  //   .then((response)=>response.json())
  //   .then((data)=>{
  //     console.log(data);
  //     setSDetails(data);

  //     if(data.sellerId!=undefined)
  //     {
  //       localStorage.setItem("seller",JSON.stringify(data));
  //       sellerData.setLoggedSeller(data);
  //     }

  //     console.log("Seller Details");
  //     console.log(sDetails);
  //   })
  //   .catch((error)=>console.log(error));
  // },[]);

  

  const [productDetails,setProductDetails]= useState({
    productName:"",
    category:"",
    productCost:"",
    productImage1:"",
    description:""
  })
  const [selectedOption,setSelectedOption] = useState('');
  function handleInput(event)
  {
    setProductDetails((prevState)=>{
      return {...prevState,[event.target.name]:event.target.value};     
    })
  }

  function handleCategoryChange(event)
  {
    setProductDetails((prevState)=>{
      setSelectedOption(event.target.value);
      return {...prevState,[event.target.name]:event.target.value};
    })
  }

  const categoryToIdMap = {
    HomeDecor : 1,
    FestiveGifts : 2,
    SoftToys : 3
  }

  

  function handleSubmit(event)
  {
    event.preventDefault();
    console.log(productDetails);
    const correspondingNumber = categoryToIdMap[selectedOption];
    console.log("Corresponding Number is", correspondingNumber);
    // console.log("seller Id is ",sellId);
    const sellId = sellerData.loggedSeller.sellerId;
    
    fetch(`http://localhost:8095/addproduct/${correspondingNumber}/${sellId}`,{
      method:'POST',
      body:JSON.stringify(productDetails),
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((response)=>{
      response.json();
      if(response.status==200)
      {
        alert("Product added successfully");
      }
    
    })
    .then((data)=>{
      console.log(data);
      setProductDetails({
        productName:"",
        category:"",
        productCost:"",
        productImage1:"",
        description:""
      })
    }).catch((err)=>{
      console.log(err);
    })
    
  }

  return(
    <>
    <AddProductHeader/>
    <section className="s-container">

          <form className="s-form">
          <div className="seller-heading">
            <h3>Enter Product Details</h3>
          </div> 
            <input type="text" className="s-inp" required placeholder="Name" onChange={handleInput} name="productName" value={productDetails.productName}/>
            {/* <input type="text" className="inp" required placeholder="Category" onChange={handleInput} name="category" value={productDetails.category}/> */}
            <select className="s-inp" name="category" value={productDetails.category} onChange={handleCategoryChange}>
              <option value="">Select a Category</option>
              <option value="HomeDecor">Home Decor</option>
              <option value="FestiveGifts">Fesive Gifts</option>
              <option value="SoftToys">Soft Toys</option>
            </select>
            <input type="number" className="s-inp" required placeholder="Price" onChange={handleInput} name="productCost" value={productDetails.productCost}/>
            <input type="text" className="s-inp" required placeholder="Image URL"  onChange={handleInput} name="productImage1" value={productDetails.productImage1}/>
            <textarea type="text" className="s-inp inp-desc" required placeholder="Description" name="description" rows={3} cols={5} onChange={handleInput} value={productDetails.description}></textarea>
            <button className="s-btn s-add-btn" onClick={handleSubmit}>Add Product</button>


        </form>

    </section>

    </>
  )
}