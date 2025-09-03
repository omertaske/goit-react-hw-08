import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../redux/auth/selectors';
import { logout } from '../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex items-center gap-4">
      <span className="font-medium text-gray-700">Hello, {user.name}</span>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
