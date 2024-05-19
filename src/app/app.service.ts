import { Injectable } from '@angular/core';
import { CardData } from './app.types';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  cardsData:CardData[] = [
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
  constructor() { }
}
