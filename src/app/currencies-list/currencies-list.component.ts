import { Component, OnInit } from '@angular/core';
import { Currency } from "../currency-price/currency";
import { CurrencyService } from "../currency.service";

@Component({
  selector: 'app-currencies-list',
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.css']
})
export class CurrenciesListComponent implements OnInit {
  currencies: Currency[] = [];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrency("bitcoin")
    .subscribe(currency => this.currencies.push(currency));
    this.currencyService.getCurrency("dash")
    .subscribe(currency => this.currencies.push(currency));
  }

}
