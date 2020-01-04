import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  //private _httpClient: HttpClient;

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



    this._httpClient.get('http://localhost/phpmybudget/index.php?domaine=technique&service=connexion&nom='+this.model.username+'&motDePasse='+this.model.motDePasse )
        .subscribe(result => {

                //this.bookCount = googleVolumeListResponse.totalItems;
                alert(result);
                // @TODO: this.bookList = ...

            });


    // Vérifier que login/mdp sont correctes, par exemple par une requête à un service REST
    localStorage.setItem('user', JSON.stringify({login : this.model.username}));
    this.router.navigate(['/listecomptes']);
  }

}
