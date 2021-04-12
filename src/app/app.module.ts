import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConverterComponent } from './components/converter/converter.component';
import { FormsModule } from '@angular/forms';
import { CurrencyConverterService } from './services/currencyconverter.service';
import { HttpClientModule } from '@angular/common/http';
import { SortByPipe } from './pipes/sortByPipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConverterComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CurrencyConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
