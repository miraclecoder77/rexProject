import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import { Alert, AlertType } from '../alert';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { slideAnimation } from '../../animations';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    animations: [slideAnimation],
})
export class AlertComponent implements OnInit {
    @Input() id = 'default-alert';
    @Input() fade = true;

    alerts: Alert[] = [];
    alertSubscription!: Subscription;
    routeSubscription!: Subscription;

    constructor(private router: Router, private alertService: AlertService) {}

    ngOnInit() {
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService
            .onAlert(this.id)
            .subscribe((alert: Alert) => {
                console.log(alert, 'lll');

                // clear alerts when an empty alert is received
                if (!alert.message) {
                    // filter out alerts without 'keepAfterRouteChange' flag
                    this.alerts = this.alerts.filter(
                        (x) => x.keepAfterRouteChange
                    );

                    // remove 'keepAfterRouteChange' flag on the rest
                    this.alerts.forEach((x) => delete x.keepAfterRouteChange);
                    return;
                }

                // add alert to array
                this.alerts.push(alert);

                // auto close alert if required
                if (alert.autoClose) {
                    console.log('removeeeeeeee');

                    setTimeout(() => this.removeAlert(alert), 2000);
                }
            });

        // clear alerts on location change
        //   this.routeSubscription = this.router.events.subscribe((event: any) => {
        //       if (event instanceof NavigationStart) {
        //           this.alertService.clear(this.id);
        //       }
        //   });
    }

    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        //this.routeSubscription.unsubscribe();
    }

    removeAlert(alert: Alert) {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert)) return;

        // remove alert
        console.log('removed');

        this.alerts = this.alerts.filter((x) => x !== alert);
    }

    cssClass(alert: Alert) {
        if (!alert) return null;

        const classes = ['alert'];

        const alertTypeClass = {
            [AlertType.Success]: 'alert-success',
            [AlertType.Error]: 'alert-danger',
            [AlertType.Info]: 'alert-info',
            [AlertType.Warning]: 'alert-warning',
        };

        classes.push(alertTypeClass[alert.type]);

        return classes.join(' ');
    }
}
