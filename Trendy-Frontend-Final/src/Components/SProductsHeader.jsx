import { Link,useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContext";
import { SellerContext } from "../contexts/SellerContext";
import { useContext, useEffect } from "react";
export default function SProductsHeader()
{

  const loggedData = useContext(UserContext);
  const sellerData = useContext(SellerContext);
  const navigate = useNavigate();

  
  useEffect(()=>{
    if((loggedData.loggedUser.isSellerOrNot)==false)
    {
      navigate("/sregister");
    }
  },[])

  function handleLogout()
    {
        localStorage.removeItem("user");
        loggedData.setLoggedUser(null);
        localStorage.removeItem("seller");
        sellerData.setLoggedSeller(null);
        
        navigate("/");

    }

  function handleViewProducts()
  {
    navigate('/addproduct');
  }
  return (
    <section>
      <div className="s-header a-p-header">
        {/* <img className="s-logo" src="https://img.freepik.com/free-vector/gradient-instagram-shop-logo-design_23-2149718652.jpg?size=626&ext=jpg"/> */}
        <div>
      {/* <img className="s-logo logo-name" src="https://img.freepik.com/free-vector/gradient-instagram-shop-logo-design_23-2149718652.jpg?size=626&ext=jpg" /> */}
      <Link to={"/sellertrack"}>
          <div className="Gear" data-aos="zoom-in" data-aos-duration="3000">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <p className="s-logo-name">Trendy Trinkets</p>
          </div>
        </Link>
      
      </div>
        <p onClick={handleViewProducts} className="a-product-nav-link">Add Product</p>
        <Link to={'/sellertrack'}>
           <img className="home" src="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/House-Home-Property-128.png"/>
        </Link>
        <img onClick={handleLogout} className="logout s-logout" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_exit2-512.png"/>
      </div>
    </section>
  )
}