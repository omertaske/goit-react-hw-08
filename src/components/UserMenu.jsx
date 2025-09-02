import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../redux/auth/selectors';
import { logout } from '../redux/auth/operations';
import { clearContacts } from '../redux/contacts/slice'; // contacts slice'ta ekle

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearContacts()); // çıkışta kontakları temizle
  };

  return (
    <div>
      <span>{user.name}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
