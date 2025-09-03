import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contacts/operations';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
        <span className="text-gray-800 font-semibold text-lg">
          {contact.name}
        </span>
        <span className="text-gray-500">{contact.number}</span>
      </div>

      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
