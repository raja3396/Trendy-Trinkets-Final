import { Link, Navigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import AddProduct from "./AddProduct";
import Search from "./Search";
export default function HomePageHeader()
{

  const loggedData = useContext(UserContext);
  return (
    <div className="s-header">
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
      <div className="s-search-bar-div">
        {/* <input type="search" className="inp search-inp" name="search" placeholder="Search for Products"/> */}
        <Search/>
      </div>
      <div className="s-nav-div">
        <ul>
          <Link to={'/slogin'}>
            <li className="s-nav-link">Login</li>
          </Link>
          
          <li className="s-nav-link">Cart</li>
          {/* <Link>
          <li>
            loggedData.loggedUser!==null?
            <AddProduct/>
            :
            <Navigate to='/slogin'/>
          </li>
          </Link> */}
        </ul>
      </div>
    </div>
  )
}