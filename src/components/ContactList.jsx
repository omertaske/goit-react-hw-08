import Contact from './Contact';

const ContactList = ({ contacts }) => {
  if (!contacts.length) return <p>No contacts found.</p>;

  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
