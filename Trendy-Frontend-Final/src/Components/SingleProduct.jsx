import { useEffect, useState } from "react";
import SingleProducts from "./SingleProducts";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePageHeader from "./HomePageHeader";
import TrackPageHeader from "./TrackPageHeader";


export default function SingleProduct(){
    const{productId}=useParams();
    const[singleproduct1,setSingleProduct1]=useState([])
    const userToken = localStorage.getItem("user"); 
    
    useEffect(()=>{
        fetch(`http://localhost:8095/getProduct/${productId}`)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                setSingleProduct1(data)
            })
    },[])
   
    return(
        <>
         {userToken ? <TrackPageHeader/> : <HomePageHeader/>}
        <div className="singleproduct-box">
            <SingleProducts items={singleproduct1}/>

        </div>
        <Footer/>
        </>
    )
}