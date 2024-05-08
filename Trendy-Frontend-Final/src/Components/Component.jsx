import Categories from "./Categories";
import Products from "./Products";
import Carusol from "./Carusol";
import Footer from "./Footer";
import SellerTrack from "./SellerTrack";
export default function Component()
{
    return(
        <div>
            {/* <Header/> */}
            <Carusol/>
            <Categories/>
            <Products/>
            <Footer/>
        </div>
    )
}