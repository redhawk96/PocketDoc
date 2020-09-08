export class MinimalUser {
    uid?: string;
    email?: string;
    firstName: string;
    lastName: string;
    dob: Date;
    nic: string;
    city: string;
    phoneNumber: string;

    constructor(firstName: string, lastName: string, dob: Date, nic: string, city: string, phoneNumber: string, email?: string, uid?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.nic = nic;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.uid = uid;
    }
}
