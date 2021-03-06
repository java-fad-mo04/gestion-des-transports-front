
/**
 * Collaborateur utilisateur de l'application.
 */
export class Collaborateur {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  numeroTel: string;
  motDePasse: string;
  roles: string[];


  constructor(params: any) {
    Object.assign(this, params);
  }

  /*
  Constante de nom de roles */

  ADMIN = 'ROLE_ADMINISTRATEUR';
  CHAUFFEUR = 'ROLE_CHAUFFEUR';
  UTILISATEUR = 'ROLE_UTILISATEUR';

  estAnonyme(): boolean {
    return this.email === undefined;
  }

  /* Retourne true si le collaborateur est connecté en tant qu'administrateur
   */

  estAdministrateur(roles: string[]): boolean {
console.log(roles.includes(this.ADMIN, 0));
    return roles.includes(this.ADMIN, 0);
  }

  /* Retourne true si le collaborateur est connecté en tant que collaborateur
  */

  estCollaborateur(roles: string[]): boolean {

      return roles.includes(this.UTILISATEUR, 0);
  }

  /**
   * Retourne true si le collaborateur est connecté en tant que chauffeur
   */

  estChauffeur(roles: string[]): boolean {

    return roles.includes(this.CHAUFFEUR, 0);
  }
}

