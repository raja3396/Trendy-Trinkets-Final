import { useState } from "react"
import axios from "axios";

export default function ViewProducts({items})
{
  const [uptname,setUptName]= useState('');
  const [uptprice,setUptPrice] = useState('');
  const [uptcategory,setUptCategory] = useState('');
  const [uptimageurl,setUptImageurl] = useState('');
  const [udescription,setUDescription] = useState('');
  const [id,setId] = useState('');

        
  return(
    <div className="container">
      <h3 className="seller-heading">Product Details</h3>

      <div className="v-product-container">
        <div className="product-image-div">
          <img className="product-image-div" src={productImage1} alt="Product Image" />
        </div>
        <div className="product-details">
        <div className="product-text">
          <h1>{productName}</h1>
          {/* <p>{items.categoryType.categoryName}</p> */}
        </div>
        <div>
          <p>{productCost}</p>
          <p>{description}</p>
        </div>
        </div>
      </div>
      {/* <div className="form">
        <input className="inp" type="text" name="title" placeholder="Name" onChange={e=>{setUptName(e.target.value)}} defaultValue={items.name} />
        <input className="inp" type="text" name="price" placeholder="Price" onChange={e=>{setUptPrice(e.target.value)}} defaultValue={items.price} />
        <input className="inp" type="text" name="category" placeholder="category" onChange={e=>{setUptCategory(e.target.value)}} defaultValue={items.category} />
        <input className="inp" type="text" name="imageurl" placeholder="image url" onChange={e=>{setUptImageurl(e.target.value)}} defaultValue={items.imageurl}/>
        <button onClick={e=>updateProduct(id)} className="btn">Update Product</button>
      </div> */}
    </div>
  )
}