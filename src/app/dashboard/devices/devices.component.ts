import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  isFilterOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  showFilter() {
    this.isFilterOpen = !this.isFilterOpen
  }

}
