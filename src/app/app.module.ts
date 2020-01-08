import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule  } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { ListecomptesComponent } from './listecomptes/listecomptes.component';

import { ComptesService } from './services/comptes.service';
import { CompteComponent } from './compte/compte.component';
import { CompteEditionComponent } from './compte-edition/compte-edition.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ListecomptesComponent,
    CompteComponent,
    CompteEditionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    ComptesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
