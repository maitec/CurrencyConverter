import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CurrencyConverterService {
  private apiKey = "7b7c27b8845ea726075f";

  constructor(private httpClient: HttpClient) {}

  getCurrencies() {
    return this.httpClient.get<any>(
      `https://free.currconv.com/api/v7/currencies?&apiKey=${this.apiKey}`
    );
  }

  convertCurrency(from: string, to: string) {
    var query = from + "_" + to;
    return this.httpClient.get<any>(
      `https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=${this.apiKey}`
    );
  }
}
