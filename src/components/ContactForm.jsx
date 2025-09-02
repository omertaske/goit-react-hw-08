import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contacts/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !phone) return;

    // Redux action dispatch
    dispatch(addContact({ name, phone }));

    // Formu temizle
    setName('');
    setPhone('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col gap-4"
    >
      <h2 className="text-xl font-semibold text-gray-700 text-center">Add New Contact</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
      >
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
