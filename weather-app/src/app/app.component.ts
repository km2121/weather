import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap, startWith, switchMap, debounceTime, distinctUntilChanged, takeWhile, first } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { City } from './shared/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchCtrl: FormControl;
  filteredLocations: Observable<any[]>;

  constructor(
    private appService: AppService
  ) {

  }

  ngOnInit() {
    this.searchCtrl = new FormControl();
    this.filteredLocations = this.searchCtrl.valueChanges
      .pipe(
        startWith(null),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(key => {
          return this.filter(key || '')
        })
      );
  }

  filter(key: any) {
    if (key == '') return Observable.of([]);
    setTimeout(() => {
      return this.appService.searchLocationAutocomplete(key).pipe(
        map(locations => locations)
      );
    }, 1000);
  }

}
