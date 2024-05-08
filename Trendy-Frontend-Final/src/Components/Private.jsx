import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function Private(props)
{
    const loggedData = useContext(UserContext);
    return (
      loggedData.loggedUser!==null?
        <props.Component/>
        :
        <Navigate to="/"/>
    )
}