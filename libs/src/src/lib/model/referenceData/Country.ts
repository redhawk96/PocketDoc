import {RefData} from "./RefData";

export interface Country extends RefData {
  id: string;
  name: string;
  disabled: boolean;
  shortName: string;
}

