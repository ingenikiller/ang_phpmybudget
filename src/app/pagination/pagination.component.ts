import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input()
    totalPage: number;
  @Input()
    page: number;

    pageHistory: string[] = [];

    model: any = {};

  // tslint:disable-next-line: no-output-rename
  @Output('sendMessage') sendMessageEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.model.page = 1;
  }

  ngOnInit() {
  }

  lancerRecherche() {
    this.sendMessageEmitter.emit('page|'+ this.model.page);
  }

  changePage(nbPageModif: number) {
    const nbPageActuel = Number(this.model.page);
    // tant que c'est supérieur à 0 et inférieur ou égal au nombre de pages total
    if (nbPageActuel + nbPageModif > 0 && nbPageActuel + nbPageModif <= this.totalPage) {
      this.model.page = Number(this.model.page) + nbPageModif;
      this.lancerRecherche();
    }
    return false;
  }

}
