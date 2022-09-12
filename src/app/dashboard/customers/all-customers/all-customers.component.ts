import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss']
})
export class AllCustomersComponent implements OnInit {
  isFilterOpen: boolean = false;
  isModalOpen:boolean = false
  customerId:any
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
        // get the id
        this.route.paramMap.subscribe(params => {
          this.customerId = params.get('id');
        })
  }

  toggleFilter(){
    this.isFilterOpen = !this.isFilterOpen
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen
  }

}
