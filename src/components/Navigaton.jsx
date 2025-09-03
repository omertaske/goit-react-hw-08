import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className="flex gap-6 text-gray-700 font-medium">
      


      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            `px-3 py-2 rounded transition-colors ${
              isActive
                ? 'bg-indigo-500 text-white'
                : 'hover:bg-indigo-100 hover:text-indigo-600'
            }`
          }
        >
          Home
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
