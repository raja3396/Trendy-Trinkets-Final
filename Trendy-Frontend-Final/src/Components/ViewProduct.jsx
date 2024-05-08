import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TrackPageHeader from "./TrackPageHeader";

import SellerHeader from "./SellerHeader";
import ViewProducts from "./ViewProducts";
import AddProductHeader from "./AddProductHeader";

export default function ViewProduct()
{

  const{prodId} = useParams();
  const[singleproduct,setSingleProduct] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:8095/getProduct/${prodId}`)
            .then((response)=>response.json())
            .then((data)=>{
              console.log(data);
              console.log(prodId);
              setSingleProduct(data);
              // console.log("Sinle "+singleproduct1)
          
  })
  },[])
  return(
    <>
    <AddProductHeader/>
       <div className="view-product-div">
          <div className="seller-heading view-product-heading">
            Product Details
          </div>
          <div className="view-product-container">      
              <div className="single-product">
                  <div className="single-productimg">
                      <img src={singleproduct.productImage1} className="p-img" alt="" />
                  </div>
              </div>
              <div className="description-box">
                  <div className="description">      
                      <h1 className="desc-title">{singleproduct.productName}</h1>
                      <h3 className="desc-price">₹ {singleproduct.productCost}</h3>
                      {/* <p className="desc-type">Category : {items.categoryType.categoryName}</p> */}
                      <p className="desc" >Description : {singleproduct.description}</p>
                  </div>

              </div>
          </div>
       </div>
    </>
  )
}