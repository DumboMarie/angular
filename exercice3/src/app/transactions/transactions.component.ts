import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})

export class TransactionsComponent implements OnInit {

  transactions:any;

  constructor( private http: HttpClient,
              private router: Router) { }

  onAfficheDetail(id: string){
    this.router.navigate([`details/${id}`]);
  }

  onTrie(arg: string){
    this.transactions.sort(function(a,b){
      if (a[arg] < b[arg]) {
        return -1;
      }
      if (a[arg] > b[arg]) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }

  ngOnInit(){
    this.http.get("assets/data/transactions.json").subscribe(data =>{
       console.log(data);
       this.transactions = data;
    })
  }

}
