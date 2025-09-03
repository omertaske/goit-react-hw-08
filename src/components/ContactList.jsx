import Contact from './Contact';

const ContactList = ({ contacts }) => {
  if (!contacts.length)
    return (
      <p className="text-center mt-10 text-gray-500 text-lg">
        No contacts found.
      </p>
    );

  return (
    <ul className="flex flex-col gap-4 max-w-3xl mx-auto mt-6">
      {contacts.map(contact => (
        <li
          key={contact.id || contact.tempId}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
        >
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
