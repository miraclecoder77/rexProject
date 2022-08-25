import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './all-store.component.html',
  styleUrls: ['./all-store.component.scss']
})
export class AllStoreComponent implements OnInit {

  isFilterOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showFilter(){
    this.isFilterOpen = !this.isFilterOpen
  }

}
