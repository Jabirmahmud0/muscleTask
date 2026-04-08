import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function AuthRoute({ children }) {
  const { ready, isAuthenticated } = useAuth();

  if (!ready) {
    return null;
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AuthRoute;
