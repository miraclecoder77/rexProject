import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavigation } from '../model';

@Component({
    selector: 'lib-side-navigation',
    templateUrl: './side-navigation.component.html',
    styleUrls: ['./side-navigation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavigationComponent {
    @Input() navConfig: SideNavigation[];
    @Input() navConfigMinor: SideNavigation[];
    @Input() permissions!: string[];

    @Input() isNavOpen: boolean;
    @Output() toggleHamburger = new EventEmitter();

    easeOut = false;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    

    close() {
        this.easeOut = true;
    
        setTimeout(() => {
          this.easeOut = false;
          this.toggleHamburger.emit();
        }, 500);
      }
    
      openNewTab(url: string, externalLink: boolean) {
        if (!externalLink) {
          this.router.navigate([url]);
        } else {
          window.open(url, "_blank");
        }
      }
}
