import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billings',
  templateUrl: './billings.component.html',
  styleUrls: ['./billings.component.scss']
})
export class BillingsComponent implements OnInit {
  isFilterOpen:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  showFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }

}
