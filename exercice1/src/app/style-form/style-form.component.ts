import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-style-form',
  templateUrl: './style-form.component.html',
  styleUrls: ['./style-form.component.css']
})

export class StyleFormComponent implements OnInit {

  @Output() newPoliceEvent = new EventEmitter<number>();
  @Output() newSizeEvent = new EventEmitter<string>();
  @Output() newAlignEvent = new EventEmitter<string>();

  constructor() { }

  onChangePolice(police: number){
    console.log(police);
    this.newPoliceEvent.emit(police);
  }

  onChangeSize(taille: string){
    this.newSizeEvent.emit(taille);
  }

  onChangeAlign(alignement: string){
    this.newAlignEvent.emit(alignement);
  }

  ngOnInit() {
  }

}
