import { UserInfo } from "./User";
import { Address } from "./Address";
import { Contact } from "./Contact";

export interface MedicalCenter extends MedicalCenterInfo {
    disabled: boolean | false;
    createdOn: Date;
    updatedOn: Date;
}

export interface MedicalCenterInfo {
    id: string;
    name: string;
    personInCharge: UserInfo;
    locationInfo: Address;
    contactInfo: Contact[];
}