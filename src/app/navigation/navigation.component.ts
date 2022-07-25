import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router ) {}

  ngOnInit(): void {
  }
  navFragmentLink(fragment :string):void {
    this.router.navigateByUrl('#' + fragment)
  }

}