import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isCollapse = false;
  showEl = true
  constructor() { }
  layout
  ngOnInit(): void {
  }

  openSidebar() {
    this.layout = document.getElementById('layout').style.width = "3rem";
    this.layout = document.getElementById('layout').style.paddingTop = "7rem";
    this.layout = document.getElementById('img').style.marginLeft = "1rem";
    this.isCollapse = !this.isCollapse;
    this.showEl = !this.showEl;
  }
  collapseSidebar() {
    this.layout = document.getElementById('layout').style.width = "16rem";
    this.isCollapse = !this.isCollapse;
    this.showEl = !this.showEl;
  }

}
