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

        // Check for duplicate email or phone
        if (this.contacts.some(c => c.email === contact.email || c.phone === contact.phone)) {
            throw new Error(`Contact with email ${contact.email} or phone ${contact.phone} already exists.`);
        }

        this.contacts.push(contact);
        console.log("Contact added successfully.");
    }

    editContact(firstName, lastName, updatedDetails) {
        let contact = this.findContactByName(firstName, lastName);
    
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

    deleteContact(firstName, lastName) {
        const index = this.contacts.findIndex(contact => 
            contact.firstName.toLowerCase() === firstName.toLowerCase() &&
            contact.lastName.toLowerCase() === lastName.toLowerCase()
        );

        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`Contact ${firstName} ${lastName} deleted successfully.`);
        } else {
            console.log(`Contact ${firstName} ${lastName} not found.`);
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
