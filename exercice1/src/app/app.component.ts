import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nom: string;
  police: string;
  taille: string;
  align: string;

  ChangePolice(newPolice: string){
    this.police = newPolice;
  }

  changeTaille(newTaille: number){
    this.taille = newTaille+'px';
  }

  changeAlign(newAlign: string){
    this.align = newAlign;
  }

  ngOnInit() {
    this.police = 'arial';
    this.taille= 24+'px';
    this.align= 'left';
  }

}
