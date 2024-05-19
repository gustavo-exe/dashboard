import { AppService } from './app.service';
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { CardData } from './app.types';
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

  cards:CardData[] = [];

  constructor(private appServide: AppService){
      this.cards = appServide.cardsData;
  }
}
