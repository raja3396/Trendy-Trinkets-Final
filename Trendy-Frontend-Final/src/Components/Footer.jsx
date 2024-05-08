import { useState } from "react";
import Footers from "./Footers";

export default function Footer(){
    const[footerdetails,setFooterdetails]=useState([
        {id:1,name:"About",cont1:"Contact us", cont2:"About us",cont3:"carrer", cont4:"stores",cont5:"cooroperate information"},
        {id:2,name:"Help",cont1:"Payments", cont2:"Shipping",cont3:"cancel & return"},
        {id:3,name:"Consumer Policy",cont1:"Cancellation & returns", cont2:"Terms of use",cont3:"Security"},
        {id:4,name:"Social",cont1:"Facebook", cont2:"Instagram",cont3:"Whatsapp"},
        {id:5,name:"Mail us",cont1:"trendy@gmail.com", cont2:"Customer care",cont3:"+1100864764"},
        {id:6,name:"Registered Address",cont1:"9/2645", cont2:"near kukatpalli",cont3:"Hyderabad"}
    ])
    return(
        <div className="footer-box">
            <div className="footer">
                {
                   footerdetails.map((foot)=>{
                    return(
                        <Footers key={foot.id} name={foot.name} cont1={foot.cont1} cont2={foot.cont2} cont3={foot.cont3} cont4={foot.cont4} cont5={foot.cont5}/>

                    )
                   })
                }
           </div>
        </div>
    )
}