
# Contact-Management-CLI-Application

## Overview

This CLI application manages contacts by performing various operations such as listing contacts, adding new contacts, updating existing contacts, and removing contacts. The project utilizes Node.js, fs module for file operations, and Commander for parsing command line arguments.

## Installation
To set up and run the project:

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the application with appropriate commands.

## Usage
### Step 1: Setting Up Contact Data
- The contacts are stored in a JSON file named `contacts.json` within the 'db' folder.

### Step 2: Implementing Contact Functions
The `contacts.js` file contains functions to manage contacts:
- `getAllContacts()`: Retrieves all contacts.
- `getContactById(id)`: Gets a contact by its ID.
- `addNewContact({ name, email, phone })`: Adds a new contact with name, email, and phone.
- `updateContactById(id, { name, email, phone })`: Updates an existing contact by ID.
- `removeContactById(id)`: Removes a contact by its ID.

### Step 3: Command Line Usage
The `index.js` file uses Commander to parse command line arguments for performing contact actions.

### Step 4: Running Commands
To perform actions on contacts via command line:
- `node index.js --action getAllContacts`: Lists all contacts.
- `node index.js --action getContactById --id [contact ID]`: Retrieves a contact by ID.
- `node index.js --action addContact --name [Name] --email [Email] --phone [Phone]`: Adds a new contact.
- `node index.js --action updateContactById --id [contact ID] --name [New Name] --email [New Email] --phone [New Phone]`: Updates a contact by ID.
- `node index.js --action removeContactById --id [contact ID]`: Removes a contact by ID.

## Project Structure
- `contacts.js`: Contains functions for contact management.
- `index.js`: Parses command line arguments and invokes contact actions.

## Contributing

If you're interested in contributing, reach out with your ideas at vuqar5qasimov@gmail.com. We welcome code contributions, bug fixes, design enhancements, and feature suggestions.

## Dependencies
- Node.js
- fs module
- commander

## Author

Vugar Gasimov

Your feedback and contributions are highly appreciated!
