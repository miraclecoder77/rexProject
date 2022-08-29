import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashiers',
  templateUrl: './cashiers.component.html',
  styleUrls: ['./cashiers.component.scss']
})
export class CashiersComponent implements OnInit {
  isFilterOpen: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  showFilter(){
    this.isFilterOpen = !this.isFilterOpen
  }

}
