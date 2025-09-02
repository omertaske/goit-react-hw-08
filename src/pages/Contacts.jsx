import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectFilteredContacts } from '../redux/contacts/selectors';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-600">
          My Contacts
        </h1>

        {/* Form */}
        <div className="mb-6">
          <ContactForm />
        </div>

        {/* Filter */}
        <div className="mb-6">
          <Filter />
        </div>

        {/* Contacts List */}
        <div>
          {contacts.length ? (
            <ContactList contacts={contacts} />
          ) : (
            <p className="text-center text-gray-500">No contacts found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
