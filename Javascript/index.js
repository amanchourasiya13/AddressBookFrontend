const Contact = require('./Contact.js');
const AddressBook = require('./AddressBook.js');

let myAddressBook = new AddressBook();

try {
    let contact1 = new Contact("John", "Doe", "123 Street", "NewYork", "NewYork", "123456", "9876543210", "john.doe@example.com");
    myAddressBook.addContact(contact1);

    let contact2 = new Contact("Jane", "Smith", "456 Avenue", "LosAngeles", "California", "789012", "8765432109", "jane.smith@example.com");
    myAddressBook.addContact(contact2);
} catch (error) {
    console.error(error.message);
}

console.log("Before update:");
myAddressBook.displayContacts();

myAddressBook.editContact("John", "Doe", { address: "789 Boulevard", city: "San Francisco" });

console.log("After update:");
myAddressBook.displayContacts();

myAddressBook.deleteContact("John", "Doe");
myAddressBook.displayContacts();

console.log(`Number of contacts: ${myAddressBook.getContactCount()}`);
