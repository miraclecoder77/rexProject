import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerId:any
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.customerId = +this.route.snapshot.params['id'];
  }

}
