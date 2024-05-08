import { Link } from "react-router-dom"

export default function Trackproducts({item}){
    return(
        
        <div className="trackproducts">
            <div className="trackproducts-img">
               <Link to={`/singleproduct/${item.productId}`}> <img className="img prod-img" src={item.productImage1} alt="" /> </Link>
              
            </div>
            <div className="details">
                <p className="title">{item.productName}</p>
                <p className="price">₹{item.productCost}</p>
            </div>

        </div>
        
    )
}