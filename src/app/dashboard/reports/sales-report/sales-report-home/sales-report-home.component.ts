import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-report-home',
  templateUrl: './sales-report-home.component.html',
  styleUrls: ['./sales-report-home.component.scss']
})
export class SalesReportHomeComponent implements OnInit {
  isFilterOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showFilter (){
    this.isFilterOpen =!this.isFilterOpen
  }

}
