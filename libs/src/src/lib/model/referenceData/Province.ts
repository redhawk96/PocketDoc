
import { State } from "../referencedata/State";
import { Country } from "./Country";
import { RefData } from "./RefData";

export interface Province extends ProvinceInfo {
    id: string;
    name: string;
    locationCount?: number;
    districts: State[];
    country: Country;
}

export class ProvinceInfo implements RefData{
    id: string;
    name: string;
    disabled: boolean;
    country: Country;
}
