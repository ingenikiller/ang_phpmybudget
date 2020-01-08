import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReponseAjax } from '../interfaces/reponseajax.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  // private _httpClient: HttpClient;

  optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'mon-entete-personnalise': 'maValeur'
  })
};

constructor(
  private router: Router, private _httpClient: HttpClient
) { }

  ngOnInit() {
  }

  login() {
    console.log('Tentative de connexion');



    // tslint:disable-next-line: max-line-length
    this._httpClient.request<ReponseAjax[]>('GET', 'http://localhost/phpmybudget/api.php?domaine=technique&service=gettoken&nom=' + this.model.username + '&motDePasse=' + this.model.password, {
      responseType:"json"} )
      .subscribe(retour => {
        let reponse: ReponseAjax;
        reponse = retour[0];
        if (reponse.status === 'OK') {
          localStorage.setItem('token', reponse.valeur);
          this.router.navigate(['/listecomptes']);
        } else {
          alert(reponse.message);
        }
    });
  }

  recupereToken(data) {
    alert(data);
    return 0;
  }

}
