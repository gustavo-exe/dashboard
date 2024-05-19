import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    credits: {
      enabled: false,
    },
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };

  cards = [
    {
      title: 'Total invoiced',
      icon: '',
      value: 88817.30
    },
    {
      title: 'Average invoice',
      icon: '',
      value: 9868.59
    },
    {
      title: 'Total orders',
      icon: '',
      value: 9
    },
    {
      title: 'Total customers',
      icon: '',
      value: 10
    },

  ]
}
