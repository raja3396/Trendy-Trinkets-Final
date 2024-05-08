import { CartContext } from "../contexts/CartContext";
import { useContext } from "react"
import { Link } from "react-router-dom";
export default function Cartlogo(){
    let count=useContext(CartContext);
    
    return(
        <div className="cart-logo">
            
           <Link to={`/carts`}> <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" className="cart-img" alt="" /></Link>
            {/* <p className="count">{count.cartcount}</p> */}
           
        </div>
    )

}