import HomePageHeader from "./HomePageHeader"
import TrackPageHeader from "./TrackPageHeader"

import Carusol from "./Carusol"
import Categories from "./Categories"
import Products from "./Products"
import Footer from "./Footer"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function Trendy()
{
  const loggedUser = useContext(UserContext);
  const userToken = localStorage.getItem("user");
  return(
   <>
     {userToken ? <TrackPageHeader/> : <HomePageHeader/>}
    <Carusol/>
    <Categories/>
    <Products/>
    <Footer/>
   </>
  )

}