import { OnInit, Injectable } from '@angular/core';
import { CompteComponent } from '../compte/compte.component';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';

import { CompteListeInterface } from '../interfaces/compteliste.interface';
import { Compte } from '../objets/compte';
import { ReponseAjax } from '../interfaces/reponseajax.interface';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  private listeCompte: Compte[];
  isAuth: boolean;

  compteListeSubject = new Subject<Compte[]>();

  emitCompteListeSubject() {
    console.log('emit');
    /*if(this.listeCompte != null){
      this.compteListeSubject.next(this.listeCompte.slice());
    } else {
      console.log('liste vide');
    }*/
    this.compteListeSubject.next(this.listeCompte.slice());
  }

  // tslint:disable-next-line: variable-name
  constructor(private _httpClient: HttpClient) {
    // this.listeCompte = Compte[];
    this.getListeCompte();
  }

  /*ngOnInit() {
    const token = localStorage.getItem('token');
    const url = 'http://localhost/phpmybudget/api.php?domaine=compte&service=getliste&token=' + token;
    this._httpClient.get<CompteListeInterface[]>(url)
        .subscribe(resultat => {

            this.listeCompte = resultat[0].tabResult;

        });
  }*/

  getListeCompte() {
    const token = localStorage.getItem('token');
    const url = 'http://localhost/phpmybudget/api.php?domaine=compte&service=getliste&token=' + token;
    this._httpClient.get<CompteListeInterface[]>(url)
        .subscribe(resultat => {

            this.listeCompte = resultat[0].tabResult;
            console.log('nb comptes:' + this.listeCompte.length);
            this.emitCompteListeSubject();
            //return this.listeCompte;
        });
  }

  updateCompte(id: string, numeroCompte: string, libelle: string, solde: number) {
    const token = localStorage.getItem('token');
    let url = 'http://localhost/phpmybudget/api.php?domaine=compte&service=update&token=' + token;
    const data: any[] = [
      {
        numeroCompte: numeroCompte,
        libelle: libelle,
        solde: solde
      }
    ]
    url += '&numeroCompte=' + numeroCompte + '&libelle=' + libelle + '&solde=' + solde;
    this._httpClient.get<ReponseAjax>(url)
      .subscribe(retour => {
        let reponse: ReponseAjax;
        reponse = retour[0];
        if (reponse.status === 'OK') {
          ///localStorage.setItem('token', reponse.valeur);
          //this.router.navigate(['/listecomptes']);
          //alert('OK');
          this.getListeCompte();
        } else {
          alert(reponse.message);
        }
     });




    this.listeCompte[id].libelle = libelle;
    this.listeCompte[id].solde = solde;
  }

}
