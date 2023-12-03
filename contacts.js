const fs = require("fs/promises");

const path = require("path");

const contactsPath = path.join("./db/contacts.json");
console.log(contactsPath);

const getAll = async () => {
  const data = await fs.readFile(contactsPath);

  return JSON.parse(data);
};

const getContactById = async (id) => {
  const contacts = await getAll();
  const result = contacts.find((item) => item.id === id);
  return result || null;
};

module.exports = {
  getAll,
  getContactById,
};
// import { promises as fs } from "fs";
// import path from "path";

// const contactsPath = path.join(__dirname, "db", "contacts.json");

// console.log(contactsPath);

// const listContacts = async () => {
//   try {
//     const data = await fs.readFile(contactsPath, "utf-8");
//     const contacts = JSON.parse(data);
//     return contacts;
//   } catch (error) {
//     throw new Error("Unable to read contacts");
//   }
// };

// const getContactById = async;

// const addContact = async (contact) => {
//   try {
//     const contacts = await listContacts();
//     contacts.push(contact);
//     await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//     return "Contact added successfully";
//   } catch (error) {
//     throw new Error("Unable to add contact");
//   }
// };

// const removeContact = async (contactId) => {
//   try {
//     const contacts = await listContacts();
//     const updateContacts = contacts.filter(
//       (contact) => contact.id !== contactId
//     );
//     await fs.writeFile(contactsPath, JSON.stringify(updateContacts, null, 2));
//     return "Contact removed successfully";
//   } catch (error) {
//     throw new Error("Unable to remove contact");
//   }
// };

// listContacts().then(console.log).catch(console.error);
// addContact({ id: 1, name: "Vugar Gasimov", phone: "063-684-02-29" })
//   .then(console.log)
//   .catch(console.error);
// removeContact(1).then(console.log).catch(console.error);
