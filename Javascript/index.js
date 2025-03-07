const AddressBook = require('./AddressBook');
const Contact = require('./Contact');

let myAddressBook = new AddressBook();

try {
    let contact1 = new Contact("John", "Doe", "123 Street", "NewYork", "NewYork", "123456", "9876543210", "john.doe@example.com");
    myAddressBook.addContact(contact1);

    let contact2 = new Contact("Jane", "Smith", "456 Avenue", "LosAngeles", "California", "789012", "8765432109", "jane.smith@example.com");
    myAddressBook.addContact(contact2);
 
        // Attempt to add a duplicate entry
    // let duplicateContact = new Contact("John", "Doe", "789 Boulevard", "San Francisco", "California", "654321", "9123456789", "john.duplicate@example.com");
    // myAddressBook.addContact(duplicateContact); // Should print "Duplicate entry"

    let contact3 = new Contact("Alice", "Brown", "789 Road", "NewYork", "NewYork", "654321", "9123456789", "alice.brown@example.com");
    myAddressBook.addContact(contact3);

    let contact4 = new Contact("Bob", "Adams", "567 Lane", "Houston", "Texas", "789654", "8523697410", "bob.adams@example.com");
    myAddressBook.addContact(contact4);

} catch (error) {
    console.error(error.message);
}

// myAddressBook.displayContacts();   //this will display every contact in addressBook

// console.log("\nContacts in New York:");
// console.log(myAddressBook.searchByCity("NewYork"));

// console.log("\nContacts in California:");
// console.log(myAddressBook.searchByState("California"));


// console.log("\nPersons grouped by City:");
// console.log(myAddressBook.viewPersonsByCity());

// console.log("\nPersons grouped by State:");
// console.log(myAddressBook.viewPersonsByState());


// console.log("\nNumber of Contacts by City:");
// console.log(myAddressBook.getCountByCity());

// console.log("\nNumber of Contacts by State:");
// console.log(myAddressBook.getCountByState());

console.log(`Number of contacts: ${myAddressBook.getContactCount()}`);

// myAddressBook.sortContactsByName();
// Sort and display contacts
myAddressBook.sortContactsBy("city");  // Sort by City
myAddressBook.sortContactsBy("state"); // Sort by State
myAddressBook.sortContactsBy("zip");   // Sort by Zip
