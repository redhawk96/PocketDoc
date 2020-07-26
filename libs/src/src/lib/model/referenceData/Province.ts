
import { State } from "../referencedata/State";
import { Country } from "./Country";

export interface Province extends ProvinceInfo {
    id: string;
    name: string;
    locationCount?: number;
    districts: State[];
    country: Country;
}

export interface ProvinceInfo {
    id: string;
    name: string;
    country: Country;
}
