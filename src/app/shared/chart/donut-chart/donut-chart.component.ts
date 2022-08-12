/* eslint-disable @angular-eslint/no-input-rename */
import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
    ViewChild,
} from '@angular/core';
import { ChartParameters, DonutChartOptions } from '../model';
import { ChartsService } from '../charts.service';

@Component({
    selector: 'lib-donut-chart',
    templateUrl: './donut-chart.component.html',
    styleUrls: ['./donut-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonutChartComponent implements OnInit {
    @Input('params') chartParameters: ChartParameters;

    @ViewChild('donutChart') chart: DonutChartComponent;
    public donutChartOptions: Partial<DonutChartOptions>;

    constructor(private charts: ChartsService) {}

    ngOnInit() {
        // console.log(this.retrievePercentages());

        if (this.chartParameters != undefined) {
            this.donutChartOptions = this.charts.createDonutChart(
                this.chartParameters.chartLabelValues,
                this.chartParameters.chartLabels,
                this.chartParameters.chartColors,
                '150rem'
            );

            if (this.chartParameters.thinBorder) {
                this.donutChartOptions.plotOptions = {
                    pie: {
                        donut: {
                            size: '130%',
                        },
                    },
                };
            }
        }
    }
    getTotal() {
        return this.chartParameters.chartLabelValues.reduce((prev, sum) => {
            return prev + sum;
        });
    }

    retrievePercentages() {
        const percentages = [];
        this.chartParameters.chartLabelValues.forEach((value) => {
            // console.log(value);

            percentages.push(
                value == 0 ? 0 : Math.floor((value / this.getTotal()) * 100)
            );
        });

        return percentages;
    }
}
