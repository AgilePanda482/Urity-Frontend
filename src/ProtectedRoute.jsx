import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext";

function ProtectedRoute() {
  const { loading, currentUser, isLogin } = useAuth();

  if (loading)
    return (
      <div className="flex justify-center items-center text-white bg-black h-screen text-md">
        Loading...
      </div>
    );
  if (!loading && !isLogin) return <Navigate to="/login" replace />;

  return <Outlet />;
}

export default ProtectedRoute;
