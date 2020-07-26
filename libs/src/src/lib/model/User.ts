import { Address } from "./Address";
import { Role } from "./Role";
import { Language } from "./referenceData/Language";
import { UserInfo as FirebaseUserInfo } from "firebase";

export interface User extends UserInfo {
    disabled: boolean | false;
    createdOn: Date;
    updatedOn: Date;
    userRole: Role;
    preferredMedium: Language;
}


export interface UserInfo extends FirebaseUserInfo {
    id: string;
    displayName: string;
    firstName: string;
    lastName: string;
    dob: string;
    nic: string;
    addressInfo: Address;
}