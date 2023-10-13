import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { DataUserContext } from "../contexts/DataUserProvider";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, isAdmin } = useContext(DataUserContext);
  const navigate = useNavigate()

  // console.log(isAdmin, isLoggedIn);

  useEffect(
    function(){
      if(!isLoggedIn) navigate("/")
    }, [isLoggedIn, navigate]
  )
 
  return isLoggedIn ? children : null;
};
export default ProtectedRoute;
