import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataUserContext } from "../contexts/DataUserProvider";

const ProtectedAdminRoute = ({ element }) => {
  const { isLoggedIn, isAdmin } = useContext(DataUserContext);

  // console.log(isAdmin, isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return element;
};
export default ProtectedAdminRoute;
