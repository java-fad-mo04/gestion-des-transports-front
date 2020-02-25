import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { TechComponent } from './tech/tech.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthComponent } from './auth/auth.component';
import { FormsModule} from "@angular/forms";
import { StatutConnecteService} from "./auth/statut-connecte.service";
import { AuthInterceptorService} from "./auth/auth-interceptor.service";
import { CollabMenuComponent } from './collab-menu/collab-menu.component';
import { CollabReservationsComponent } from './collab-reservations/collab-reservations.component';
import { CollabAnnoncesComponent } from './collab-annonces/collab-annonces.component';
import { CollabStatistiquesComponent } from './collab-statistiques/collab-statistiques.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminGererChauffeurComponent } from './admin-gerer-chauffeur/admin-gerer-chauffeur';
import { AdminGererVehiculesComponent } from './admin-gerer-vehicules/admin-gerer-vehicules.component';
import { AdminVoirDetailVehiculeComponent } from './admin-voir-detail-vehicule/admin-voir-detail-vehicule.component';
import { AdminGeolocaliserVehiculeComponent } from './admin-geolocaliser-vehicule/admin-geolocaliser-vehicule.component';
import { AdminGererCycleVieVehiculeComponent } from './admin-gerer-cycle-vie-vehicule/admin-gerer-cycle-vie-vehicule.component';

const routes: Routes = [
  { path: 'tech', component: TechComponent, canActivate:[StatutConnecteService]},   // /tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent },
  { path: 'collaborateur', component: CollabMenuComponent },
  { path: 'collaborateur/reservations', component: CollabReservationsComponent },   // créer pour test de liaison entre panneau
  { path: 'collaborateur/annonces', component: CollabAnnoncesComponent },           // créer pour test de liaison entre panneau
  { path: 'collaborateur/statistiques', component: CollabStatistiquesComponent },   // créer pour test de liaison entre panneau
  
  { path: 'admin',                            component: AdminMenuComponent },                  // Menu administrateur
  { path: 'admin/chauffeurs',                 component: AdminGererChauffeurComponent },        // Gérer les chauffeurs
  { path: 'admin/vehicules',                  component: AdminGererVehiculesComponent },        // Gérer les véhicules
  { path: 'admin/vehicules/detail',           component: AdminVoirDetailVehiculeComponent },    // Visualiser le détail d'un véhicule les véhicules
  { path: 'admin/vehicules/geolocalisation',  component: AdminGeolocaliserVehiculeComponent },  // Géolocaliser les véhicules
  { path: 'admin/vehicules/cycle-vie-veh',    component: AdminGererCycleVieVehiculeComponent }, // Gérer le cycle de vie d'un véhicule 

  { path: '', redirectTo: '/tech', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    CollabMenuComponent,
    CollabReservationsComponent,
    CollabAnnoncesComponent,
    CollabStatistiquesComponent,
    AdminMenuComponent,
    AdminGererChauffeurComponent,
    AdminGererVehiculesComponent,
    AdminVoirDetailVehiculeComponent,
    AdminGeolocaliserVehiculeComponent,
    AdminGererCycleVieVehiculeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
