import { Component, OnInit } from '@angular/core';
import { ComptesService } from '../services/comptes.service';

@Component({
  selector: 'app-listecomptes',
  templateUrl: './listecomptes.component.html',
  styleUrls: ['./listecomptes.component.css']
})
export class ListecomptesComponent implements OnInit {
  isAuth: boolean;

  constructor(private compteService: ComptesService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
   }

  ngOnInit() {
  }

}
