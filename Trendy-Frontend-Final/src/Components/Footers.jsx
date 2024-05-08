export default function Footers(props){
    return(
        <div className="footer-headings">
            <div className="foot-head"> 
              <h1 className="foot-txt">{props.name}</h1>
            </div>
            <div className="food-cont">
               <p className="cont">{props.cont1}</p>
               <p className="cont">{props.cont2}</p>
               <p className="cont">{props.cont3}</p>
               <p className="cont">{props.cont4}</p>
               <p className="cont">{props.cont5}</p>
            </div>
        </div>     
    )
}