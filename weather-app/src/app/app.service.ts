import { Injectable } from '@angular/core';
import { Http, BaseRequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { API_KEY, API_URL, POSTAL_CODE_SEARCH } from './app.constant';
import { Observable } from 'rxjs/Observable';
import { City } from './shared/model';

@Injectable()
export class AppService {
    constructor(
        private http: Http
    ) { }

    searchPostalCode(postalCode: string): Observable<City | {}> {
        const options = this.createSearchParams({ apiKey: API_KEY, q: postalCode });
        return this.http.get(API_URL + POSTAL_CODE_SEARCH, options).map((response) => {
            const city: City = response.json();
            return city;
        }).catch((err) => {
            return this.handleError(err);
        });
    }

    createSearchParams(requestParam: any): BaseRequestOptions {
        const options = new BaseRequestOptions();
        const params = new URLSearchParams();
        params.set('apikey', requestParam.apiKey);
        params.set('q', requestParam.q);
        options.params = params;
        return options;
    }

    handleError(err) {
        console.log(err);
        return err;
    }
}
