import { useEffect, useState } from "react";
import AddProductHeader from "./AddProductHeader";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function SellerPoducts()
{

  let [products,setProducts] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:8086/api/v1/products')
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setProducts(data)
        })
        
},[])
  return(
    <>
    <AddProductHeader/>
   
    <h1 className="products-heading">All your Products</h1>
    
    <div className="products-container">
    {
        products.map((product)=>{
          return (
            <div className="product-box" key={product.id}>
              <div className="image-wrapper">
               <img className="product-image" src={product.imageurl} alt="product"/>
              </div>
              <h1 className="product-title">{product.name}</h1>
              <h2 className="product-price">{product.price}</h2>
              <div className="edit-options">
                {/* <img onClick={()=> setShowModal(true)} className="edit-btn" src="https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-1024.png" alt="edit"/> */}
                <Link to={`/viewProduct/${product.id}`}>
                 <img className="edit-btn" src="https://cdn0.iconfinder.com/data/icons/zondicons/20/view-show-512.png" alt="view"/>
                </Link>
                {/* {showModal && <Modal onClose={ () => setShowModal(false)}/>} */}
               </div>
            </div>
          )
        })
      }
    </div>
    
    </>
  ) 
}