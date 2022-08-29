import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  isFilterOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showFilter(){
    this.isFilterOpen = !this.isFilterOpen
  }
}
