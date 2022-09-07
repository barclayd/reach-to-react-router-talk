import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ isAuthorized }) => {
  return isAuthorized ? <Outlet /> : <Navigate to="/login" replace />;
};
