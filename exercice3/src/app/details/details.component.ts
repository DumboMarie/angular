import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  infoTransaction : any;

  constructor( private http: HttpClient,
               private route : ActivatedRoute ){ }

  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    this.http.get("assets/data/"+id+".json").subscribe(data =>{
       console.log(data);
       this.infoTransaction = data;
    })
  }

}
