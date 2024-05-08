// import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export default function Category({data}){
    console.log(data)
    
    return(
        <div className="category">
            <Link className="link" to={`/track/${data.categoryId}`}>
              <div className="categoryImageBox">
                <img className="categoryImage" src={data.categoryImage} alt="categoryImage" />
              </div>
              <p className="categoryName">{data.categoryName}</p>
            </Link>
        </div>
    )
}