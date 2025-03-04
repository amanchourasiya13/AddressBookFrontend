const AddressBook = require('./AddressBook');
const Contact = require('./Contact');

let myAddressBook = new AddressBook();

try {
    let contact1 = new Contact("John", "Doe", "123 Street", "NewYork", "NewYork", "123456", "9876543210", "john.doe@example.com");
    myAddressBook.addContact(contact1);

    let contact2 = new Contact("Jane", "Smith", "456 Avenue", "LosAngeles", "California", "789012", "8765432109", "jane.smith@example.com");
    myAddressBook.addContact(contact2);

    // Attempt to add a duplicate entry
    let duplicateContact = new Contact("John", "Doe", "789 Boulevard", "San Francisco", "California", "654321", "9123456789", "john.duplicate@example.com");
    myAddressBook.addContact(duplicateContact); // Should print "Duplicate entry"

    let contact3 = new Contact("Alice", "Brown", "789 Road", "NewYork", "NewYork", "654321", "9123456789", "alice.brown@example.com");
    myAddressBook.addContact(contact3);

} catch (error) {
    console.error(error.message);
}

// myAddressBook.displayContacts();   //this will display every contact in addressBook

console.log("\nContacts in New York:");
console.log(myAddressBook.searchByCity("NewYork"));

console.log("\nContacts in California:");
console.log(myAddressBook.searchByState("California"));


console.log("\nPersons grouped by City:");
console.log(myAddressBook.viewPersonsByCity());

console.log("\nPersons grouped by State:");
console.log(myAddressBook.viewPersonsByState());

console.log(`Number of contacts: ${myAddressBook.getContactCount()}`);
