import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div className="flex gap-6 mr-8">
      <NavLink
        to="/login"
        className={({ isActive }) =>
          `px-4 py-2 rounded font-medium transition-colors ${
            isActive
              ? 'bg-blue-500 text-white'
              : 'text-gray-700 hover:bg-blue-100'
          }`
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          `px-4 py-2 rounded font-medium transition-colors ${
            isActive
              ? 'bg-green-500 text-white'
              : 'text-gray-700 hover:bg-green-100'
          }`
        }
      >
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
