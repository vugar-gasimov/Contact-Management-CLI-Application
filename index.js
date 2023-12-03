const contacts = require("./contacts");
console.log(contacts);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "listContacts":
      const allContacts = await contacts.getAll();
      return console.log(allContacts);
    case "getContactById":
      const contact = await contacts.getContactById(id);
      return console.log(contact);
  }
};
// invokeAction({ action: "listContacts" });
invokeAction({ action: "getContactById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// listContacts, getContactById,  addContact, removeContact
