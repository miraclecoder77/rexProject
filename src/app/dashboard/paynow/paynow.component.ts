import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paynow',
  templateUrl: './paynow.component.html',
  styleUrls: ['./paynow.component.scss']
})
export class PaynowComponent implements OnInit {

  isModalOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

}
