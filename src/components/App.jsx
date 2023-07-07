import React from "react";
import { useSelector, useDispatch } from "react-redux";
import pcss from "../components/phonebook/phonebook.module.css";
import ContactForm from "../components/contform/form";
import Filter from "../components/filter/filter";
import ContactList from "../components/contlist/list";
import { addUser, deleteUser, } from "../components/redux/contactsSlice";
import { filterUser } from "./redux/filterSlice";

const Phonebook = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    const errorContact = contacts.find((contact) => contact.name === name);

    if (errorContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addUser({ name, number }));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteUser(contactId));
  };


  const handleFilterChange = (event) => {
    const { value } = event.target;
    dispatch(filterUser(value));
  };

  return (
    <div className={pcss.cont}>
      <h2 className={pcss.ptitle}>Phonebook</h2>

      <ContactForm onAddContact={handleAddContact} />

      <div className={pcss.ccont}>
        <h2 className={pcss.ctitle}>Contacts</h2>

        <Filter filter={filter} onFilterChange={handleFilterChange} />

        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export default Phonebook;

// import React, { useState, useEffect } from "react";
// import { nanoid } from "nanoid";
// import pcss from "../components/phonebook/phonebook.module.css";
// import ContactForm from "../components/contform/form";
// import Filter from "../components/filter/filter";
// import ContactList from "../components/contlist/list";

// const Phonebook = () => {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState("");


//  useEffect(() => {
//     const storedContacts = JSON.parse(window.localStorage.getItem("contacts"));
//     if (storedContacts && storedContacts.length) {
//       setContacts(storedContacts);
//     }
//   }, []);

//   useEffect(() => {
//     if (contacts.length) {
//       window.localStorage.setItem("contacts", JSON.stringify(contacts));
//     }
//   }, [contacts]);


//   const handleAddContact = (name, number) => {
//     const errorContact = contacts.find((contact) => contact.name === name);

//     if (errorContact) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     const newContact = {
//       id: nanoid(),
//       name,
//       number
//     };

//     setContacts((prevContacts) => [...prevContacts, newContact]);
//   };

//   const handleDeleteContact = (contactId) => {
//     setContacts((prevContacts) =>
//       prevContacts.filter((contact) => contact.id !== contactId)
//     );
//   };

//   const handleFilterChange = (event) => {
//     const { value } = event.target;
//     setFilter(value);
//   };

//   useEffect(() => {
//     const handleBeforeUnload = () => {
//       localStorage.removeItem("contactss");
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, []);

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className={pcss.cont}>
//       <h2 className={pcss.ptitle}>Phonebook</h2>

//       <ContactForm onAddContact={handleAddContact} />

//       <div className={pcss.ccont}>
//         <h2 className={pcss.ctitle}>Contacts</h2>

//         <Filter onFilterChange={handleFilterChange} />

//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContact={handleDeleteContact}
//         />
//       </div>
//     </div>
//   );
// };

// export default Phonebook;

export const App = () => {


  return (
    <div
      style={{
        padding: "40px",
        color: "#010101"
      }}
    >
      <Phonebook />
    </div>
  );
};