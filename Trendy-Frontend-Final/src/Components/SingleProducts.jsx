import AddCart from "./AddCart";
import BuyNowlogo from "./BuyNowlogo";

export default function SingleProducts({items}){
    return(
        <>
        <div className="single-product">
            <div className="single-productimg">
                <img src={items.productImage1} className="p-img" alt="" />
            </div>
        </div>
        <div className="description-box">
            <div className="description">      
                <h1 className="desc-title">{items.productName}</h1>
                <h3 className="desc-price">₹ {items.productCost}</h3>
                {/* <p className="desc-type">Category : {items.categoryType.categoryName}</p> */}
                <p className="desc" >Description : {items.description}</p>
            </div>
            <div className="buttons">
                <AddCart cartitems={items}/>
                <BuyNowlogo cartitems={items}/>
            </div>

        </div>
        </>
    )
}