
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivetRoutes = ({ children }) => {
    const { user, loading } = useAuth() // useContext(AuthContext) diyeoo kora jabe kono problem hobe na
    const location = useLocation() // route er location dhore rakahr jonne lagbe 

    if (loading) {
        return <progress className="progress w-56"></progress>

    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoutes;