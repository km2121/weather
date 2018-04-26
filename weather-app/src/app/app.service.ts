import { Injectable } from '@angular/core';
import { Http, BaseRequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { API_KEY, API_URL } from './app.constant';
import { Observable } from 'rxjs/Observable';
import { Location } from './shared/model';
import { Weather } from './shared/model/weather';

@Injectable()
export class AppService {
    constructor(
        private http: Http
    ) { }

    searchLocationAutocomplete(key: any): Observable<Location[] | any> {
        const options = this.createSearchParams({ key: API_KEY, q: key });
        return this.http.get(API_URL.AUTO_COMPLETE, options).map((response) => {
            const localtions: Location[] = response.json();
            return localtions;
        }).catch((err) => {
            return this.handleError(err);
        });
    }

    getCurrentWeather(key: any) {
        const options = this.createSearchParams({key: API_KEY, q: key});
        return this.http.get(API_URL.CURRENT_WEATHER, options).map((response) => {
            const weather: Weather = response.json();
            return weather;
        }).catch((err) => this.handleError(err));
    }

    getForeCastWeather(key: any) {
        const options = this.createSearchParams({key: API_KEY, q: key});
        return this.http.get(API_URL.FORE_CAST_WEATHER, options).map((response) => {
            const weather: Weather = response.json();
            return weather;
        }).catch((err) => this.handleError(err));
    }

    createSearchParams(requestParam: any): BaseRequestOptions {
        const options = new BaseRequestOptions();
        const params = new URLSearchParams();
        params.set('key', requestParam.key);
        params.set('q', requestParam.q);
        options.params = params;
        return options;
    }

    handleError(err) {
        console.log(err);
        return err;
    }
}
