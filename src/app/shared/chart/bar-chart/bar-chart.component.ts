/* eslint-disable @angular-eslint/no-input-rename */
import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ViewChild,
    Input,
} from '@angular/core';
import { BarChartOptions, BarChartParameters } from '../model';
import { ChartsService } from '../charts.service';

@Component({
    selector: 'lib-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartComponent implements OnInit {
    @ViewChild('barChart') barChartComponent: BarChartComponent;

    @Input('params') chartParameters: BarChartParameters;
    @Input() position: 'top' | 'bottom' = 'bottom';
    barChartOptions: Partial<BarChartOptions>;

    constructor(private chartsService: ChartsService) {}

    getTotal(numbers: number[]) {
        return numbers.reduce((prev, sum) => {
            return prev + sum;
        });
    }

    ngOnInit() {
        console.log(this.chartParameters);
        if (this.chartParameters != undefined) {
            this.barChartOptions = this.chartsService.createBarChart(
                this.chartParameters.data,
                this.chartParameters.xAxisLabels,
                this.chartParameters.yAxisLabel,
                this.chartParameters.chartColors
            );
        }
    }
}
