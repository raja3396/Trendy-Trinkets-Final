import { useState } from "react"
export default function Carusol(){
   const[carsolimage,setCarsolImage]=useState([
    {id:1,img:"https://images.pexels.com/photos/5499869/pexels-photo-5499869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {id:2,img:"https://images.pexels.com/photos/7139801/pexels-photo-7139801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {id:3,img:"https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {id:4,img:"https://images.pexels.com/photos/7055795/pexels-photo-7055795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {id:5,img:"https://images.pexels.com/photos/1746191/pexels-photo-1746191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    // {id:6,img:"https://images.pexels.com/photos/7764473/pexels-photo-7764473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {id:7,img:"https://images.pexels.com/photos/5499869/pexels-photo-5499869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
   ])
    return(
        <div className="carusol">
            <div className="main">
                <div className="slider">
                    <div className="frame">
                       {
                        carsolimage.map((images)=>{
                            return(
                                <img src={images.img} alt="" className="carsol-img"/>
                                // <div></div>
                            )
                        })
                       }
                    </div>

                </div>

            </div>

        </div>
    )
}