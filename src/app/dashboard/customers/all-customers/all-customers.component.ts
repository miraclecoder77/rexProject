import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss']
})
export class AllCustomersComponent implements OnInit {
  customerId:any
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
        // get the id
        this.route.paramMap.subscribe(params => {
          this.customerId = params.get('id')
        })
  }

}
