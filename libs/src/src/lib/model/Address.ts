import { GeoLocation } from "./GeoLocation";
import { City } from "./referenceData/City";

export interface Address {
    street: string;
    city: City;
    geoLocation?: GeoLocation;
}