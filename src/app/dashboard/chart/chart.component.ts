import { Component, OnInit, NgZone } from '@angular/core';

// amCharts imports
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chart: am4charts.XYChart;

  constructor(private zone: NgZone) {
    am4core.useTheme(am4themes_animated);
  }

  ngOnInit(): void {
    var chart = am4core.create("chart", am4charts.PieChart);

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(50);
    pieSeries.colors.list = [
      am4core.color('#afafaf'),
      am4core.color('#ff7875'),
      am4core.color('#a8071a'),
    ];
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.hidden = true;
    pieSeries.tooltip.disabled = true;
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    
    // Add a legend
    // chart.legend = new am4charts.Legend();

    chart.data = [{
      "country": "Lithuania",
      "litres": 70
    }, {
      "country": "Germany",
      "litres": 30
    },  {
      "country": "Nigeria",
      "litres": 0
    }
  ];
  }
    ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}