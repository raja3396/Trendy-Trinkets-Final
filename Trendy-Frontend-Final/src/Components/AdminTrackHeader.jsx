import { Link, Navigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Profilehover from "./Profilehover";
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { useNavigate } from "react-router-dom";
import { SellerContext } from "../contexts/SellerContext";
import Search from "./Search";
import Cartlogo from "./Cartlogo";

export default function AdminTrackHeader()
{
  //profile hovering part
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = () => {
    setIsHovering(!isHovering);
  };
//.........................


  const loggedData = useContext(UserContext);
  const sellerData = useContext(SellerContext);
  const navigate = useNavigate();

  function handleSeller()
  {
    if((loggedData.loggedUser.isSellerOrNot)==true)
    {
      navigate("/addProduct");
    }
    else 
    {
      navigate("/sregister");
    }
  }
  function handleAdmin()
  {
    navigate("/admin");
  }
  function handleLogout()
    {
        localStorage.removeItem("user");
        loggedData.setLoggedUser(null);
        localStorage.removeItem("seller");
        sellerData.setLoggedSeller(null);
        
        navigate("/");

    }

  
  return (
    <div className="s-header">
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
      <div className="s-search-bar-div">
        {/* <input type="search" className="inp search-inp" name="search" placeholder="Search for Products"/> */}
        <Search/>
      </div>
      <div className="s-nav-div">
        <ul> 
        <li className="s-nav-link" onClick={handleAdmin}>Admin</li>         
        <li className="s-nav-link hover-btn"  onMouseEnter={handleHover} onMouseLeave={handleHover}><Link className="s-nav-link">Profile</Link> {isHovering && <Profilehover />}</li>
          <Cartlogo/>
          <li className="s-nav-link" onClick={handleSeller}>Seller</li>
          <li>
            <img onClick={handleLogout} className="logout" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_exit2-512.png"/>
          </li>
        </ul>
      </div>
    </div>
  )

}