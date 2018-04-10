import { GeoPosition } from "./geo-position";
import { SupplementalAdminAreas } from "./supplemental-admin-areas";
import { Details } from "./details";

export class City {
    version: number;
    key: string;
    type: string;
    rank: number;
    localizedName: string;
    englishName: string;
    primaryPostalCode: string;
    geoPosition: GeoPosition;
    isAlias: boolean;
    supplementalAdminAreas: SupplementalAdminAreas;
    dataSets: string;
    details: Details
}