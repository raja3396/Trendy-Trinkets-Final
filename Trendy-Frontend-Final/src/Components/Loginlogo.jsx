import { UserContext } from "../contexts/UserContext"
import { useContext } from "react"
export default function Loginlogo(){
    let userlogin=useContext(UserContext)
    return(
        <>
        {
        loggedin.loggeduser=="Login"?
          <li className="nav-link1"><Link className="link" to={'/login'}>{userlogin.loggeduser}</Link></li>:
          <p className="nav-link1">{userlogin.loggeduser}</p>
        }
        </>
    )
}