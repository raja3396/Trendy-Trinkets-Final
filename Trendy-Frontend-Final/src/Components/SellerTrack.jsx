import TrackPageHeader from "./TrackPageHeader";
import { useState,useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { SellerContext } from '../contexts/SellerContext'
import { useContext } from "react";
import Component from "./Component";
import Trendy from "./Trendy";
import Carusol from "./Carusol";
import Categories from "./Categories";
import Products from "./Products";
import Footer from "./Footer";
import AdminTrackHeader from "./AdminTrackHeader";
export default function SellerTrack()
{
  const sellerData = useContext(SellerContext);
  let loggedData = useContext(UserContext);
  const [cId,setCId] = useState(loggedData.loggedUser.customerId);
  const [sDetails,setSDetails] = useState(null);
  const admin = loggedData.loggedUser.isAdminOrNot;
  const [dupval,setDupval] = useState(1);
  useEffect(()=>{
    fetch(`http://localhost:8095/sellerByCusomterId/${cId}`,{
      method:"GET"
    })
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      setSDetails(data);

      if(data.sellerId!=undefined)
      {
        localStorage.setItem("seller",JSON.stringify(data));
        sellerData.setLoggedSeller(data);
      }

      console.log("Seller Details");
      console.log(sDetails);
      // setDupval(dupval+1);
    })
    .catch((error)=>console.log(error));
  },[dupval]);

  return(
    <>
    {admin ? <AdminTrackHeader/> : <TrackPageHeader/>}
    <Carusol/>
    <Categories/>
    <Products/>
    <Footer/>    
    </>
  )
}