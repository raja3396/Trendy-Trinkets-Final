import { useState } from "react";
import Productheading from "./Productheading";
import Productlimit from "./Productlimit";
import { useEffect } from "react";

export default function Products(){
    const[productlimit,setProductlimit]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8095/product?limit=8')
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                setProductlimit(data)
            })
            
    },[])
    
    return(
        <div className="products">
            {/* <div className="product"> */}
               <Productheading/>
            {/* </div> */}
            {
                productlimit.slice(0, 4).map((item) => {
                    return (
                        <Productlimit key={item.id} product={item}/>
                    );
                })
                
            }
           
        </div>
    )
}