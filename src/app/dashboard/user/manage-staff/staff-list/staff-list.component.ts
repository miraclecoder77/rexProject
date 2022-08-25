import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  isFilterOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showFilter() {
    this.isFilterOpen = !this.isFilterOpen
  }

}
