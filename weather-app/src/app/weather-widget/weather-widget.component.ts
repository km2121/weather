import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Weather, ForecastDay } from '../shared/model';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent {
  private _forecastDay: ForecastDay;
  title: string;
  weatherIconClass: string;
  shortDate: string;

  constructor() { }

  get forecastDay(): ForecastDay {
    return this._forecastDay;
  }

  @Input()
  set forecastDay(forecastDay: ForecastDay) {
    this._forecastDay = forecastDay;
    if (this._forecastDay) {
      this.title = 'Today';
      this.shortDate = new Date(this._forecastDay.date).toDateString().slice(4, 10);
    }
  }

  show() {
    console.log(this._forecastDay);
  }

}
