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
  layout;
  ngOnInit(): void {
  }

  collapseSidebar() {
    this.layout = document.getElementById('layout').style.width = "3rem";
    this.layout = document.getElementById('sidebar-logo').style.paddingTop = "4rem";
    this.layout = document.getElementById('toggle-btn-wrapper').style.top = '3rem';
    this.isCollapse = !this.isCollapse;
    this.showEl = !this.showEl;
  }
  openSidebar() {
    this.layout = document.getElementById('layout').style.width = "16rem";
    this.layout = document.getElementById('layout').style.transition = 'transition: all 0.4s ease-in-out 0s;';
    this.isCollapse = !this.isCollapse;
    this.showEl = !this.showEl;
    this.layout = document.getElementById('toggle-btn-wrapper').style.top = '5.1rem';
  }

}
