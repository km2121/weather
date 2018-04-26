import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap, startWith, switchMap, debounceTime, distinctUntilChanged, takeWhile, first } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { Location, ForecastDay } from './shared/model';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Weather } from './shared/model/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchCtrl: FormControl;
  filteredLocations: Observable<any[]>;
  localtions: Location[];
  weather: Weather;
  isSearching: boolean;
  forecastDay: ForecastDay;

  constructor(
    private appService: AppService
  ) {

  }

  ngOnInit() {
    this.localtions = new Array<Location>();
    this.searchCtrl = new FormControl();
    this.filteredLocations = this.searchCtrl.valueChanges
      .pipe(
        startWith(null),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(key => {
          return this.filter(key || '');
        })
      );
  }

  filter(key: any) {
    if (key === '') {
      return Observable.of([]);
    }
    this.isSearching = true;
    return this.appService.searchLocationAutocomplete(key).pipe(
      map((locations: Location[]) => {
        this.localtions = locations.slice();
        this.isSearching = false;
        return locations;
      }),
      catchError((error) => {
        this.isSearching = false;
        return Observable.of([]);
      })
    );
  }

  selectCity(event: MatAutocompleteSelectedEvent) {
    for (let i = 0; i < this.localtions.length; i++) {
      if (this.localtions[i].name === event.option.value) {
        this.appService.getForeCastWeather(this.localtions[i].name).subscribe((weather: Weather) => {
          this.weather = weather;
          this.forecastDay = weather.forecast.forecastday[0];
        });
      }
    }
  }

}
