import Category from "./Category";
import { useEffect } from "react";
import { useState } from "react";
import Categoryheading from "./Categoryheading";
export default function Categories(){
    const[category,setCategory]=useState([])
    useEffect(()=>{
        fetch('http://localhost:8095/category')
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                setCategory(data)
            })
    },[])
    return(
        <div className="category-box">
            <Categoryheading/>
            {
                category.map((item)=>{
                    return(
                        <Category key={item} data={item}/>
                    )
                })
            }

        </div>
    )
}