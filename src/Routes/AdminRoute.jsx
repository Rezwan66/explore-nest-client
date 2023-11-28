import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import Spinner from '../components/Shared/Spinner';

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, isAdminLoading } = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Spinner></Spinner>;
  }
  if (!user || !isAdmin) {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
  return children;
};
export default AdminRoute;
