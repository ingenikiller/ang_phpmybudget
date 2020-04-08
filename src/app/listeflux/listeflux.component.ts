import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { Compte } from '../objets/compte';
import { ComptesService } from '../services/comptes.service';
import { FluxService } from '../services/flux.service';
import { Flux } from '../objets/flux';
import { SegmentService } from '../services/segment.service';
import { Segment } from '../objets/Segment';
import { format } from 'url';

@Component({
  selector: 'app-listeflux',
  templateUrl: './listeflux.component.html',
  styleUrls: ['./listeflux.component.css']
})
export class ListefluxComponent implements OnInit {

  model: any = {};

  listeFlux: Flux[];

  listeFluxMaitre: Flux[];

  listeComptes: Compte[];

  listeModePaiement: Segment[];

  titrePopup: string;

  totalPage: number;
  page: number;

  constructor(
    private compteService: ComptesService,
    private fluxService: FluxService,
    private segmentService: SegmentService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.compteService.retourneListeCompte()
      .subscribe(retour => {
        this.listeComptes = retour[0].tabResult;
      });

    this.segmentService.getModePaiement()
      .subscribe(retour => {
        this.listeModePaiement = retour[0].tabResult;
      });
    this.page = 1;
    this.rechercheFlux();
  }

  rechercheFlux() {
    this.fluxService.getListeFlux(this.page,
      this.model.comptePrincipal === undefined ? '' : this.model.comptePrincipal,
      this.model.compteDestination === undefined ? '' : this.model.compteDestination)
      .subscribe(retour => {
        this.listeFlux = retour[0].tabResult;
        this.totalPage = retour[0].totalPage;
        this.page = retour[0].page;
      });

  }

  open(content, fluxId: string) {
    if (fluxId === '0') {
      //
    } else {
      //
      this.fluxService.getOne(fluxId)
      .subscribe(retour => {
        this.titrePopup = 'Edition flux';
        const flux = retour[0];
        this.model.fluxId = flux.fluxId;
        this.model.flux = flux.flux;
        this.model.description = flux.description;
        this.model.modePaiementId = flux.modePaiementId;
        this.model.compteId = flux.compteId;
        this.model.compteDest = flux.compteDest;
        this.model.fluxMaitre = flux.fluxMaitre;
        const params = 'comptePrincipal=' + flux.compteId + '&fluxMaitre=O';
        this.fluxService.getListeFluxParams(params)
        .subscribe( retourAjax => {
          this.listeFluxMaitre = retourAjax[0].tabResult;
          this.model.fluxMaitreId = flux.fluxMaitreId;
        });

        // this.model.fluxMaitreId = flux.fluxMaitreId;
        this.model.typeOperationId = flux.typeOperationId;
        this.model.entreeEpargne = flux.entreeEpargne;
        this.model.sortieEpargne = flux.sortieEpargne;
        this.model.depense       = flux.depense;
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(() => {
          console.log('pass1');

        }, (reason) => {
          console.log('pass2');
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });

      });
      return false;
      }

  }

  onSendMessage(message: string): void {
    if (message.substring(0, 5) === 'page|') {
      this.page = Number(message.substring(5));
      this.rechercheFlux();
    }
}

}
