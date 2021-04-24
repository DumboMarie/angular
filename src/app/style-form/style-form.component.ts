import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-style-form',
  templateUrl: './style-form.component.html',
  styleUrls: ['./style-form.component.css']
})

export class StyleFormComponent implements OnInit {

  @Output() newPoliceEvent = new EventEmitter<string>();
  @Output() newSizeEvent = new EventEmitter<number>();
  @Output() newAlignEvent = new EventEmitter<number>();

  constructor() { }

  onChangePolice(police: number){
    this.newPoliceEvent.emit(police);
  }

  onChangeSize(taille: string){
    this.newSizeEvent.emit(taille);
  }

  onChangeAlign(alignement: string){
    this.newAlignEvent.emit(alignement);
    console.log(alignement);
  }

  ngOnInit() {
  }

}
