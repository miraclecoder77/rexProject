import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("contact", {static: false})
  contactEl: ElementRef;

  @ViewChild("home", {static: false})
  homeEl: ElementRef;
  
  constructor(private route : ActivatedRoute) {}

  ngOnInit(): void {}

  scrollToSection(route: string) {
    if (route === 'contact') {
      this.scrollToContact();
    } else if (route === 'home') {
      this.scrollToHome();
    }
  }

  scrollToContact() {
    this.contactEl.nativeElement.scrollIntoView({
      behaviour: "smooth"
    })
  }

  scrollToHome() {
    this.homeEl.nativeElement.scrollIntoView({
      behaviour: "smooth"
    })
  }

}
