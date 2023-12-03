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

const actionIndex = process.argv.indexOf("--action");
if (actionIndex !== -1) {
  const action = process.argv[actionIndex + 1];
  invokeAction({ action });
}
