import { Component, OnInit } from '@angular/core';


import { Stocks } from '../models/stocks';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  public currentUser;
  constructor() {
    this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
   }
   

  ngOnInit(): void {
  }

  // powers = ['Really Smart', 'Super Flexible',
  //           'Super Hot', 'Weather Changer'];
  // names = ['Stock 1', 'Stock 2',
  //           'Stock 3', 'Stock 4'];
  // model = new Stocks('facid_1' ,1, 'xx', this.names[2], this.powers[0], 'Chuck Overstreet');

  // submitted = false;

  //onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

}
