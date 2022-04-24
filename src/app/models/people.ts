import {Section} from "./section";

export interface People {
  'id': number;
  'name': string;
  'height': string;
  'mass': string;
  'hair_color': string;
  'skin_color': string;
  'eye_color': string;
  'birth_year': string;
  'gender': string;
  'homeworld': string;
  'films': [];
  'species': [];
  'vehicles': [];
  'starships': [];
  'created': string;
  'edited': string;
  'url': string;

  'section_id'?: number
}
