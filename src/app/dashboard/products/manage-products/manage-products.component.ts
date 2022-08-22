import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
