const Contact = require('./Contact.js');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (contact instanceof Contact) {
            this.contacts.push(contact);
            console.log("Contact added successfully.");
        }   // Prevent duplicate contacts based on email or phone number
       else if (this.contacts.some(c => c.email === contact.email || c.phone === contact.phone)) {
            throw new Error(`Contact with email ${contact.email} or phone ${contact.phone} already exists.`);
        }

        
        else {
            console.log("Invalid contact object.");
        }
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