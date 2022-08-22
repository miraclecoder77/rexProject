import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObserveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
