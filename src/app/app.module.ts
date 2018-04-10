import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {AppService} from './app.service';
import {GraphComponent} from './graph/graph.Component';
import {TableComponent} from './table/table.component';
import {DetailsComponent} from "./details-Table/details.component";

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    TableComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
