const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "AllContactsList":
      const allContacts = await contacts.getAllContacts();
      return console.log(allContacts);

    case "getContactById":
      const contact = await contacts.getContactById(id);
      return console.log(contact);

    case "addContact":
      const newContact = await contacts.addNewContact({ name, email, phone });
      return console.log(newContact);

    case "updateContactById":
      const updatedContact = await contacts.updateContactById(id, {
        name,
        email,
        phone,
      });
      return console.log(updatedContact);

    case "removeContactById":
      const removedContact = await contacts.removeContactById(id);
      return console.log(removedContact);
  }
};
// invokeAction({ action: "AllContactsList" });

// invokeAction({ action: "getContactById", id: "AeHIrLTr6JkxGE6SN-0Rw" });

// invokeAction({
//   action: "addContact",
//   name: "Clementine Bauch",
//   email: "Nathan@yesenia.net",
//   phone: "1-463-123-4447",
// });

// invokeAction({
//   action: "updateContactById",
//   id: "J9Ci1aZN5H1rhoqQi_G3e",
//   name: "Clementine Bauch",
//   email: "Clementinebauch@yesenia.com",
//   phone: "1-463-123-4447",
// });

// invokeAction({ action: "removeContactById", id: "J9Ci1aZN5H1rhoqQi_G3e" });

// AllContactsList, getContactById,  addContact, updateContactById, removeContactById
