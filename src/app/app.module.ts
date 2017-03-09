import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs'; 
import { CurrencyService } from './currency.service';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CurrencyPriceComponent } from './currency-price/currency-price.component';
import { CurrenciesListComponent } from './currencies-list/currencies-list.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NotesComponent } from './notes/notes.component';
import { NotesService } from "./notes.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CurrencyPriceComponent,
    CurrenciesListComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule.forRoot()
  ],
  providers: [CurrencyService, NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
