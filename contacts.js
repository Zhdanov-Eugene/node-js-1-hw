const path = require('path');
const fs = require('fs').promises;
const contactsPath = path.resolve('./db/contacts.json');

function listContacts() {
    fs.readFile(contactsPath, 'utf-8').then((data) => console.table(JSON.parse(data)))
        .catch((error) => console.log(error));
}

function getContactById(contactId) {
    fs.readFile(contactsPath, 'utf-8').then((data) => {
        const listOfContacts = JSON.parse(data);
        const result = listOfContacts.find((contact) => contact.id === contactId);
        return console.log(result);
    }).catch((error) => console.log(error));
}

function removeContact(contactId) {
    fs.readFile(contactsPath, 'utf-8').then((data) => {
        const listOfContacts = JSON.parse(data);
        const result = listOfContacts.find((result) => result.id === contactId);

        if (!result) {
            console.log('We can`t find anything');
            return;
        }

        const newListOfContacts = listOfContacts.filter((item) => item.id !== contactId);
        fs.writeFile(contactsPath, JSON.stringify(newListOfContacts), 'utf-8');
        console.log(`Contact ${result.name} deleted`);
    }).catch((error) => console.log(error));
}

function addContact(name, email, phone) {
    fs.readFile(contactsPath, 'utf-8').then((data) => {
        const listOfContacts = JSON.parse(data);
        const newId = listOfContacts.length + 1;
        const newContact = {
            name,
            email,
            phone,
            id: newId,
        };

        const newListOfContacts = [...listOfContacts, newContact];
        fs.writeFile(contactsPath, JSON.stringify(newListOfContacts), 'utf-8');
        return console.log(`Contact ${newContact.name} added`)
    }).catch((error) => console.log(error));
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};