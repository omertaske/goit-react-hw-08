import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'; // BrowserRouter çıkartıldı
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import Layout from '../components/Layout';
import PrivateRoute from '../components/PrivateRoute';
import RestrictedRoute from '../components/RestrictedRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Contacts from '../pages/Contacts';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg font-medium">Loading user...</p>
        </div>
      </div>
    );

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 text-gray-900 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={<Registration />} />}
          />
          
          <Route
            path="/login" 
            element={<RestrictedRoute component={<Login />} />}
          />
          <Route
            path="/contacts" 
            element={<PrivateRoute component={<Contacts />} />}
          />
        </Routes>
      </div>
    </Layout>
  );
};

export default App;
