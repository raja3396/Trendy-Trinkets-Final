import { Link } from "react-router-dom"
export default function Productlimit({product}){
    return(
        <div className="product-limit-box">
            <div className="product-limit-image">
              <Link to={`/singleproduct/${product.productId}`}><img className="pl-img"src={product.productImage1} alt="" /> </Link>
            </div>
            <div className="details">
                <p className="pl-title">{product.productName}</p>
                <p className="pl-price">₹ {product.productCost}</p>
            </div>
        </div>
    )
}