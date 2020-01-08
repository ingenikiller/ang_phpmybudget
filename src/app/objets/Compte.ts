export class Compte {
  numeroCompte: string;
  libelle: string;
  solde: number;
  associatedObjet: Array<{
    name: string;
    tabResult: Array<{
      somme: number;
    }>
  }>;
}
