import React from "react";
import { useDispatch } from "react-redux";
import lcss from "../contlist/list.module.css";
import { deleteUser } from "../redux/contactsSlice";

const ContactList = ({ contacts, filter }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteUser(contactId));
  };

  const filteredContacts = contacts.filter((contact) => {
    const contactName = contact.name || ""; // Handle cases where contact.name is undefined
    return (
      typeof contactName === "string" &&
      contactName.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <ul className={lcss.llist}>
      {filteredContacts.map((contact) => (
        <li className={lcss.item} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={lcss.bbtn}
            onClick={() => handleDeleteContact(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

// import React from "react";
// import { useDispatch } from "react-redux";
// import lcss from "../contlist/list.module.css";
// import { deleteUser } from "../redux/contactsSlice";

// const ContactList = ({ contacts, filter }) => {
//   const dispatch = useDispatch();

//   const handleDeleteContact = (contactId) => {
//     dispatch(deleteUser(contactId));
//   };

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <ul className={lcss.llist}>
//       {filteredContacts.map((contact) => (
//         <li className={lcss.item} key={contact.id}>
//           {contact.name}: {contact.number}
//           <button
//             className={lcss.bbtn}
//             onClick={() => handleDeleteContact(contact.id)}
//           >
//             delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactList;

// import React from "react";
// //import { nanoid } from "nanoid";
// import lcss from "../contlist/list.module.css";

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <ul className={lcss.llist}>
//       {contacts.map((contact) => (
//         <li className={lcss.item} key={contact.id}>
//           {contact.name}: {contact.number}
//           <button
//             className={lcss.bbtn}
//             onClick={() => onDeleteContact(contact.id)}
//           >
//             delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactList;