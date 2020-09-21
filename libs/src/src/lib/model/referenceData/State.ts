import { RefData } from "./RefData";
import { Country } from "./Country";
import { ProvinceInfo } from "./Province";

export class State implements StateInfo,RefData {
    id: string;
    name: string;
    shortName: string;
    country: Country;
    disabled: boolean;
    province: ProvinceInfo;
  }
  
  export interface StateInfo {
    id: string;
    name: string;
    shortName: string;
    province: ProvinceInfo;
  }
  