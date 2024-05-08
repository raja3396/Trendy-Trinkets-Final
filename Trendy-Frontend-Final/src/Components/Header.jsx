import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import Search from "./Search";
import Loginlogo from "./Loginlogo";
import Cartlogo from "./Cartlogo";
// import Profilehover from "./Profilehover";

export default function Header(){
    return(
    
        <div className="header">
            <div className="logo">
                <h1 className="logo-name"><Link className="link" to={'/'}>Trindy Trinkets</Link></h1>
            </div>
           <Search/>       
            <nav className="nav">
                <ul className="nav-links">
                    <li className="nav-link"><Link   className="link" to={'/slogin'}>Login</Link></li>
                    {/* <Loginlogo/> */}
                    <li className="nav-link" ><Link className="link">Profile</Link></li>
                    <Cartlogo/>
                    <li className="nav-link"><Link className="link" to={'/addProduct'}>Seller</Link></li>
                </ul>
            </nav>
        </div>
    )
}