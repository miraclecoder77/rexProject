import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
