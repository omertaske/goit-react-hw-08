import Contact from './Contact';

const ContactList = ({ contacts }) => {
  if (!contacts.length) return <p>No contacts found.</p>;

  return (
    <ul className="flex flex-col gap-2">
      {contacts.map(contact => (
        <Contact key={contact.id || contact.tempId} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
