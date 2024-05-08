import { useContext, useEffect, useState } from "react"
// import Single from "./Single"
import { useParams } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Trackproducts from "./Trackproducts"
import Banner from "./Banner"
import HomePageHeader from "./HomePageHeader"
import { UserContext } from "../contexts/UserContext"
import TrackPageHeader from "./TrackPageHeader";


export default function Track(){
    const loggedData = useContext(UserContext);
    const userToken = localStorage.getItem("user");  
    const[jewelery,setJewelery]=useState("jewelery")
    const[jewelarydata,setJewelaryData]=useState([])
    const [categoryDetails,setcategoryDetails] = useState([])
    const {categoryId}=useParams();
    console.log(categoryId);
    useEffect(()=>{
        // if(data==jewelery){
            fetch(`http://localhost:8095/getProductByCategory/${categoryId}`)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                setJewelaryData(data)
            })

        // }
        // else{
        //     console.log("no data found")
        // }
        
            
    },[])

    useEffect(()=>{
        fetch(`http://localhost:8095/category/${categoryId}`)
        .then(response=>response.json())
        .then((data)=>{
            console.log(data);
            setcategoryDetails(data)
        }).catch(error=>console.log(error));
    },[])
    return(
        <>
        {userToken ? <TrackPageHeader/> : <HomePageHeader/>}
        
        <div className="banner-box">
            <div className="banner">
                <img src={categoryDetails.categoryImage} alt="Category Image" />
            </div>
        </div>
        <h2 className="category-title">{categoryDetails.categoryName} Products</h2>    
        <div className="track"> 
            {
                jewelarydata.map((data)=>{
                    return(
                        <Trackproducts key={data.id} item={data}/>
                    )
                })
            }
        </div>
        <Footer/>
        </>
    )
}