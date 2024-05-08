import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { useNavigate } from "react-router-dom";
import { SellerContext } from "../contexts/SellerContext";
import Profile from './Profile';

function Profilehover() {

  const loggedData = useContext(UserContext);
  const sellerData = useContext(SellerContext);
  const navigate = useNavigate();

  function handleLogout()
    {
        localStorage.removeItem("user");
        loggedData.setLoggedUser(null);
        localStorage.removeItem("seller");
        sellerData.setLoggedSeller(null);
        
        navigate("/");

    }
    
  return (
    <div className="HoverLogin">
      <div className="triangle-up"></div>
      <div className="loginMenu">
        <div className="menuList">
          <i><FontAwesomeIcon icon={faCircleUser} /></i>
          <Link className='profile-link' to={"/profile"}><p>My Profile</p></Link>
        </div>
        <div className="menuList">
          <i><FontAwesomeIcon icon={faCircleUser} /></i>
          <Link className='profile-link' to={"/userOrders"}><p>Orders</p></Link>
        </div>
        <div className="menuList">
          <i><FontAwesomeIcon icon={faCircleUser} /></i>
          <p onClick={handleLogout}>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default Profilehover;
