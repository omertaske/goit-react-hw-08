import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) return <div>Loading...</div>; 

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
