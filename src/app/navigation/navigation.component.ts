import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output() onLinkClicked = new EventEmitter<string>();

  constructor(private router: Router ) {}

  ngOnInit(): void {
  }

  clickLink(route: string) {
    this.onLinkClicked.emit(route);
  }

}
