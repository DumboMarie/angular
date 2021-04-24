import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css'],
})
export class CalculComponent {

  resultat : number;
  historiques=[];

  constructor() { }

  addhistorique(operation: string){
    const heure = new Date();
    const historique = {
      'heure': heure,
      'operation': operation,
      'res': this.resultat
    };
    this.historiques.push(historique);
  }

  onCalcul(form: NgForm) {
    const operation = form.value['chiffre1']+ form.value['operateur']+form.value['chiffre2'];
    this.resultat = eval(operation);
    this.addhistorique(operation);
  }

  onDelete(){
    this.historiques=[];
  }

}
