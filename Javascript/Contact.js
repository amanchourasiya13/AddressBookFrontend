class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        if (!this.isValidName(firstName)) throw new Error("Invalid First Name");
        if (!this.isValidName(lastName)) throw new Error("Invalid Last Name");
        if (!this.isValidAddress(address)) throw new Error("Invalid Address");
        if (!this.isValidAddress(city)) throw new Error("Invalid City");
        if (!this.isValidAddress(state)) throw new Error("Invalid State");
        if (!this.isValidZip(zip)) throw new Error("Invalid Zip Code");
        if (!this.isValidPhone(phone)) throw new Error("Invalid Phone Number");
        if (!this.isValidEmail(email)) throw new Error("Invalid Email");

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    isValidName(name) {
        return /^[A-Z][a-zA-Z]{2,}$/.test(name);
    }

    isValidAddress(value) {
        return /^[a-zA-Z0-9\s]{4,}$/.test(value);
    }

    isValidZip(zip) {
        return /^\d{5,6}$/.test(zip);
    }

    isValidPhone(phone) {
        return /^\d{10}$/.test(phone);
    }

    isValidEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state}, Zip: ${this.zip}, Phone: ${this.phone}, Email: ${this.email}`;
    }
}

try {
    let contact1 = new Contact("John", "Doe", "123 Street", "NewYork", "NewY", "123456", "9876543210", "john.doe@example.com");
    console.log(contact1.toString());
} catch (error) {
    console.error(error.message);
}

try {
    let contact2 = new Contact("jo", "smith", "abc", "la", "C", "1234", "98765", "invalid.email");
} catch (error) {
    console.error(error.message);
}