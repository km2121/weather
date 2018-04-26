export class ForecastDay {
    date: string;
    date_epoch: string;
    day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        avgtemp_c: number;
        avgtemp_f: number;
        maxwind_mph: number;
        maxwind_kph: number;
        totalprecip_mm: number;
        totalprecip_in: number;
        avgvis_km: number;
        avgvis_miles: number;
        avghumidity: number;
        condition: {
            text: string;
            icon: string;
            code: number;
        },
        uv: number;
    };
    astro: {
        sunrise: string;
        sunset: string;
        moonrise: string;
        moonset: string
    };
}
