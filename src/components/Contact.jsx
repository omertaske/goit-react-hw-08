import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contacts/operations';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className="flex justify-between items-center p-3 mb-2 bg-white shadow-sm rounded">
      <span className="text-gray-800 font-medium">
        {contact.name} - {contact.number}
      </span>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
