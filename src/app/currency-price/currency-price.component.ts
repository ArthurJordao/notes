import { Component, OnInit, Input } from '@angular/core';
import { Currency } from './currency';

@Component({
  selector: 'app-currency-price',
  templateUrl: './currency-price.component.html',
  styleUrls: ['./currency-price.component.css']
})
export class CurrencyPriceComponent {
  @Input()
  currency:Currency;

}
