export class MinimalUser {
    firstName: string;
    lastName: string;
    dob: Date;
    nic: string;
    city: string;
    phoneNumber : string;

    constructor(firstName: string, lastName: string, dob: Date, nic: string, city: string, phoneNumber : string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.nic = nic;
        this.city = city;
        this.phoneNumber = phoneNumber;
    }
}
