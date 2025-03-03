class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        if (!this.isValidName(firstName)) throw new Error(`Invalid First Name: ${firstName}`);
        if (!this.isValidName(lastName)) throw new Error(`Invalid Last Name: ${lastName}`);
        if (!this.isValidAddress(address)) throw new Error(`Invalid Address: ${address}`);
        if (!this.isValidAddress(city)) throw new Error(`Invalid City: ${city}`);
        if (!this.isValidAddress(state)) throw new Error(`Invalid State: ${state}`);
        if (!this.isValidZip(zip)) throw new Error(`Invalid Zip Code: ${zip}`);
        if (!this.isValidPhone(phone)) throw new Error(`Invalid Phone Number: ${phone}`);
        if (!this.isValidEmail(email)) throw new Error(`Invalid Email: ${email}`);

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

module.exports = Contact;
