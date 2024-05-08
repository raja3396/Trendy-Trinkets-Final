import { useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { SellerContext } from "../contexts/SellerContext";
export default function AdminHeader()
{

  const navigate = useNavigate();
  const loggedData = useContext(UserContext);
  const sellerData = useContext(SellerContext);
  
  function handleLogout()
    {
        localStorage.removeItem("user");
        loggedData.setLoggedUser(null);
        localStorage.removeItem("seller");
        sellerData.setLoggedSeller(null);
        
        navigate("/");

    }
    function handleUsers()
    {
      navigate("/users");
    }
    function handleSellers()
    {
      navigate("/sellers");
    }
    function handleOrders()
    {
      navigate("/orders");
    }

  return (
    <section>
      <div className="admin-header">
      {/* <img className="logo" src="https://img.freepik.com/free-vector/gradient-instagram-shop-logo-design_23-2149718652.jpg?size=626&ext=jpg"/> */}

        <Link to={"/sellertrack"}>
          <div className="Gear" data-aos="zoom-in" data-aos-duration="3000">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <p className="s-logo-name">Trendy Trinkets</p>
          </div>
        </Link>
      <div className="admin-container">
        <div className="admin-nav">
          <h1 className="text">Admin</h1>
          <ul>
            <li onClick={handleUsers}>Users</li>
            <li onClick={handleSellers}>Sellers</li>
            <li onClick={handleOrders}>Orders</li>
          </ul>
        </div>
      </div>
      <img onClick={handleLogout} className="logout admin-logout" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_exit2-512.png"/>
      </div>
    </section>
  )
}