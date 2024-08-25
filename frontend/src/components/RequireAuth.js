import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        // If the person has the right role
        auth?.roles?.find(role => allowedRoles?.includes(role))
            // show them the children of this component (let them in)
            ? <Outlet />
            // If they don't have the right role,
            // check if they have the right access token
            : auth?.accessToken //changed from user to accessToken to persist login after refresh
                // If they have an access token (if they're logged in), show them the unauthorized page.
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                // If instead, they're not logged in, show them to the login page
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;