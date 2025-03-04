const Contact = require('./Contact.js');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (!(contact instanceof Contact)) {
            console.log("Invalid contact object.");
            return;
        }

        // Check for duplicate person by name
        const isDuplicate = this.contacts
            .filter(c => c.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
                         c.lastName.toLowerCase() === contact.lastName.toLowerCase())
            .reduce(count => count + 1, 0) > 0;

        if (isDuplicate) {
            console.log(`Duplicate entry: Contact ${contact.firstName} ${contact.lastName} already exists.`);
            return;
        }

        this.contacts.push(contact);
        console.log("Contact added successfully.");
    }

    editContact(firstName, lastName, updatedDetails) {
        let contact = this.contacts.find(c => 
            c.firstName.toLowerCase() === firstName.toLowerCase() &&
            c.lastName.toLowerCase() === lastName.toLowerCase()
        );

        if (!contact) {
            console.log("Contact not found.");
            return;
        }

        Object.keys(updatedDetails).forEach(key => {
            if (contact.hasOwnProperty(key) && updatedDetails[key] !== undefined) {
                contact[key] = updatedDetails[key];
            }
        });

        console.log("Contact updated successfully.");
    }

    deleteContact(firstName, lastName) {
        const initialLength = this.contacts.length;
        this.contacts = this.contacts.filter(c => 
            !(c.firstName.toLowerCase() === firstName.toLowerCase() && 
              c.lastName.toLowerCase() === lastName.toLowerCase())
        );

        if (this.contacts.length < initialLength) {
            console.log("Contact deleted successfully.");
        } else {
            console.log("Contact not found.");
        }
    }

    getContactCount() {
        return this.contacts.reduce((count) => count + 1, 0);
    }

    searchByCity(city) {
        return this.contacts
            .filter(contact => contact.city.toLowerCase() === city.toLowerCase())
            .map(contact => contact.toString());
    }

    searchByState(state) {
        return this.contacts
            .filter(contact => contact.state.toLowerCase() === state.toLowerCase())
            .map(contact => contact.toString());
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("Address Book is empty.");
        } else {
            console.log("Contacts in Address Book:");
            this.contacts.forEach(contact => console.log(contact.toString()));
        }
    }
}

module.exports = AddressBook;
