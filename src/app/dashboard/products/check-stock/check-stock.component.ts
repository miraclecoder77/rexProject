import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-check-stock',
  templateUrl: './check-stock.component.html',
  styleUrls: ['./check-stock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckStockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
