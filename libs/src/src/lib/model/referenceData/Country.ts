import {RefData} from "./RefData";

export interface Country extends RefData {
  id: string;
  name: string;
  active: string;
  phone: string;
  shortName: string;
}

