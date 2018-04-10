import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
