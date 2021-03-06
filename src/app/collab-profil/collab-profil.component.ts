import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CollabMenuComponent } from '../collab-menu/collab-menu.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-collab-profil',
  templateUrl: './collab-profil.component.html',
  styles: []
})

export class CollabProfilComponent implements OnInit {

  colProfil: Collaborateur = new Collaborateur({});
  roles: string[];
  ad: Boolean; ch: Boolean; co: Boolean;
  case: number;

  constructor(private _router: Router, private dataAuth: AuthService, private routeur: Router, private _cookieService: CookieService) { }

  ngOnInit() {

    /* récupère les données des roles du collaborateur */

    this.roles = this.dataAuth.trouverRole();
    this.ad = this.colProfil.estAdministrateur(this.roles);
    this.ch = this.colProfil.estChauffeur(this.roles);
    this.co = this.colProfil.estCollaborateur(this.roles);

    /* Teste les combinaisons possibles des roles du Collaborateurpour sélection du menu profil
   pour donner
   */

    if ((!this.ad) && (!this.ch) && (this.co)) {
      /* dirigé directement sur la page nommé ci-dessou */
      this._cookieService.set('choixProfil', '0');
      this._router.navigate(['/collaborateur']);
    }

    /*
    Donne une valeur de résultat qui sera exploitée par un case dans collab-profil.component.html
    */
    if ((!this.ad) && (this.ch) && (!this.co)) { this.case = 1; }
    if ((this.ad) && (!this.ch) && (this.co)) { this.case = 2; }
    if ((this.ad) && (!this.ch) && (!this.co)) { this.case = 2; }

  }

  choixCollaborateur() {

    this._cookieService.set('choixProfil', '0');
    this._router.navigate(['/collaborateur']);
      }

  choixChauffeur() {

    this._cookieService.set('choixProfil', '1');
    this._router.navigate(['/chauffeur']);
  }

  choixAdministrateur() {

    this._cookieService.set('choixProfil', '2');
    this._router.navigate(['/admin']);
  }


}
