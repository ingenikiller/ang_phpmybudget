import { Compte } from '../objets/compte';

export interface CompteListeInterface {
  name: string;

  valeur: CompteTab[];

  status: string;
}

export interface CompteTab {
  tabResult: Compte[];
}
