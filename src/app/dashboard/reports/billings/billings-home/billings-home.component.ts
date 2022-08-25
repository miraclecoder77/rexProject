import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billings-home',
  templateUrl: './billings-home.component.html',
  styleUrls: ['./billings-home.component.scss']
})
export class BillingsHomeComponent implements OnInit {
  isFilterOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showFilter(){
    this.isFilterOpen = !this.isFilterOpen
  }
  

}
