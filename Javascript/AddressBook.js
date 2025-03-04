const Contact = require('./Contact.js');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (contact instanceof Contact) {
            this.contacts.push(contact);
            console.log("Contact added successfully.");
        }else  if (this.contacts.some(c => c.email === contact.email || c.phone === contact.phone)) {
            throw new Error(`Contact with email ${contact.email} or phone ${contact.phone} already exists.`);
        }
        else {
            console.log("Invalid contact object.");
        }
    }

    editContact(firstName, lastName, updatedDetails) {
        let contact = this.contacts.find(
            c => c.firstName.toLowerCase() === firstName.toLowerCase() &&
                 c.lastName.toLowerCase() === lastName.toLowerCase()
        );
    
        if (!contact) {
            console.log(`Contact ${firstName} ${lastName} not found.`);
            return;
        }
    
        Object.keys(updatedDetails).forEach(key => {
            if (contact.hasOwnProperty(key) && updatedDetails[key] !== undefined) {
                contact[key] = updatedDetails[key];
            }
        });
    
        console.log(`Contact ${firstName} ${lastName} updated successfully.`);
    }
    
    findContactByName(firstName, lastName) {
        return this.contacts.find(contact => 
            contact.firstName.toLowerCase() === firstName.toLowerCase() &&
            contact.lastName.toLowerCase() === lastName.toLowerCase()
        );
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