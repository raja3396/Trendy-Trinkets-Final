import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Search(){
    const [product,setProduct]=useState([]);

    function searchhandle(event){
      console.log(event.target.value);
        // event.preventDefault();
        if(event.target.value!=''){
            fetch('http://localhost:8095/category')
            .then((response)=>response.json())
            .then((data)=>{
              // if(data.message==undefined){
                console.log(data);
                setProduct(data);

                // console.log(data.categoryName);
              // }
            })
        }
        else{
            setProduct([])
        }
    }   
    
    
    return(
        <div className="search-bar-div">
               <input type="search"onChange={searchhandle} placeholder="Search for products" className="s-inp s-search-inp" />
               {
                product.length!==0?(
                    <div className="search-result">
                    {
                      product.map(item=>{
                        return(
                          <p className="search-data" key={item.categoryId} onClick={()=>{
                            setProduct([])
                          }}><Link className="search-link" to={`/track/${item.categoryId}`}>{item.categoryName}</Link></p>
                        )
                      })
                       
                    }
                 </div>

                ):null  
               }
               
              
            </div>
    )
}