const { program } = require("commander");
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "getAllContacts":
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

    default:
      return console.log("Unknown action");
  }
};

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-n, --name, <type>")
  .option("-e, --email, <type>")
  .option("-p, --phone, <type>");
program.parse();

const options = program.opts();
invokeAction(options);
