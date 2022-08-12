import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
    Output,
    EventEmitter,
    ChangeDetectorRef,
    OnDestroy,
} from '@angular/core';
import { AuthService, StorageService } from '@ga/core';
import { User } from '@ga/models';
import { Subscription } from 'rxjs';

@Component({
    selector: 'lib-top-navigation',
    templateUrl: './top-navigation.component.html',
    styleUrls: ['./top-navigation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavigationComponent implements OnInit, OnDestroy {
    initials: string;
    user: User;
    subscriptions: Subscription[] = [];

    // @Input() user: string;
    @Input() links: string;

    @Output() clickLink = new EventEmitter();

    constructor(
        private authService: AuthService,
        private changeDetector: ChangeDetectorRef,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        window.onbeforeunload = () => this.ngOnDestroy();

        this.subscriptions.push(
            this.authService.currentUser$.subscribe((user) => {
                this.user = user.user;

                console.log(user);

                if (!this.user) {
                    this.user = this.storageService.getCurrentUser();
                }

                //console.log(this.user);

                //console.log(this.authService.userValue);

                const names =
                    `${this.user.firstName} ${this.user.lastName}`.split(' ');

                if (names.length === 2) {
                    this.initials =
                        `${names[0][0]}${names[1][0]}`.toUpperCase();
                } else if (names.length > 2) {
                    this.initials =
                        `${names[0][0]}${names[2][0]}`.toUpperCase();
                } else {
                    this.initials = `${names[0][0]}`.toUpperCase();
                }
                this.changeDetector.markForCheck();
            })
        );
    }

    linkClicked(linkName: string) {
        this.clickLink.emit(linkName);
    }
    ngOnDestroy() {
        this.subscriptions.forEach((e) => e.unsubscribe());
    }
}
