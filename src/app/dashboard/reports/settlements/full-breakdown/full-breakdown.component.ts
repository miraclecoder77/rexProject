import { IResponseWrapper } from './../../../../shared/models/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-breakdown',
  templateUrl: './full-breakdown.component.html',
  styleUrls: ['./full-breakdown.component.scss']
})
export class FullBreakdownComponent implements OnInit {

 isFilterOpen = false 
 constructor() { }

  ngOnInit(): void {
  }

  showFilter() {
    this.isFilterOpen = !this.isFilterOpen
  }

}
