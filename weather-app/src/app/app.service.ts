import { Injectable } from '@angular/core';
import { Http, BaseRequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { API_KEY, API_URL, POSTAL_CODE_SEARCH, CITIES_CODE_SEARCH, AUTO_COMPLETE } from './app.constant';
import { Observable } from 'rxjs/Observable';
import { City, Location } from './shared/model';

@Injectable()
export class AppService {
    constructor(
        private http: Http
    ) { }

    searchLocationAutocomplete(key: any): Observable<Location[] | any> {
        const options = this.createSearchParams({ key: API_KEY, q: key });
        return this.http.get(API_URL + AUTO_COMPLETE, options).map((response) => {
            const localtions: Location[] = response.json();
            return localtions;
        }).catch((err) => {
            return this.handleError(err);
        })
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
