import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  isFilterOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showFilter(){
    this.isFilterOpen = !this.isFilterOpen
  }
}
