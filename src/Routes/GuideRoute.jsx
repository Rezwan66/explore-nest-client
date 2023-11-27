import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useGuide from '../hooks/useGuide';
import Spinner from '../components/Shared/Spinner';

const GuideRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isGuide, isGuideLoading } = useGuide();
  const location = useLocation();

  if (loading || isGuideLoading) {
    return <Spinner></Spinner>;
  }
  if (!user && !isGuide) {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
  return children;
};
export default GuideRoute;
