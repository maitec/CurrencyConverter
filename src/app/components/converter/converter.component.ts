import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from 'src/app/services/currencyconverter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  public amount = 0;
  public from = 'USD';
  public to = 'EUR';
  public total = 0;
  public currencies = [];

  constructor(
    private currencyConverterService: CurrencyConverterService
  ) { }

  ngOnInit() {
    this.currencyConverterService.getCurrencies().subscribe(res => {
      this.currencies = Object.values(res.results);
    });
  }

  public convert() :void {
    this.currencyConverterService.convertCurrency(this.from, this.to).subscribe(res => {
      let propObj = `${this.from}_${this.to}`;
      this.total = this.amount * res[propObj];
    })
  }

}
