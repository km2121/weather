import { DMA } from "./dma";
import { Sources } from "./sources";

export class Details {
    key: string;
    stationCode: string;
    stationGmtOffset: number;
    bandMap: string;
    climo: string;
    localRadar: string;
    mediaRegion: string;
    metar: string;
    nXMetro: string;
    nXState: string;
    population: number;
    primaryWarningCountyCode: string;
    primaryWarningZoneCode: string;
    satellite: string;
    synoptic: string;
    marineStation: string;
    marineStationGMTOffset: number;
    videoCode: string;
    partnerID: number;
    dma: DMA;
    sources: Sources
    canonicalPostalCode: string;
    canonicalLocationKey: string;
}