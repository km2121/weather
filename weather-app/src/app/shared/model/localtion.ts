export class Location {
    id: number;
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number
    url?: string;
    tz_id?: string;
    localtime_epoch?: number;
    localtime?: string;
}