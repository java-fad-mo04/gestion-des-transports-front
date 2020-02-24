/**
 * Collaborateur utilisateur de l'application.
 */
export class Collaborateur {
  id:number;
  nom:string;
  prenom:string;
  email:string;
  numeroTel:string;
  motDePasse:string;
  roles:string[];

  constructor(params:any) {
    Object.assign(this, params);
  }

  estAnonyme():boolean {
    return this.email == undefined;
  }

}