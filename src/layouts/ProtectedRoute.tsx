import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../provider/AuthContext";

export const ProtectedRoute = () => {
    const auth = useAuthContext();
    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />
}