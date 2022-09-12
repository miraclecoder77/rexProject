import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paynow-home',
  templateUrl: './paynow-home.component.html',
  styleUrls: ['./paynow-home.component.scss']
})
export class PaynowHomeComponent implements OnInit {
  
  isModalOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
