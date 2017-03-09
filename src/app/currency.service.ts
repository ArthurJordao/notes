import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Currency } from './currency-price/currency';
import { Observable } from "rxjs/Observable";

@Injectable()
export class CurrencyService {
  constructor(private http: Http) { }
  getCurrency(currency: string): Observable<Currency> {
    return this.http.get("https://api.coinmarketcap.com/v1/ticker/" + currency + "/")
      .map((response) => {
        let currency_obj = response.json();
        let currency: Currency = new Currency(currency_obj[0].name, currency_obj[0].price_usd);
        return currency;
      });
  }
}

