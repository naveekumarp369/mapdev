import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import * as L from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, tileLayer } from 'leaflet';
import { geoJSON, Map } from 'leaflet';
import { geojsonFeature } from 'src/app/helper/geo-json-type.enum';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() geojsonFeature: geojsonFeature[] = [];
  @Input() value: any;
  @Input()
  customValues!: string;

  mapData: any;

  maps: Map | undefined;
  selectedOption = geojsonFeature.DISTRICT;
  mapLayers: any[] = [];

  options = {
    attributionControl: false,
    minZoom: 10.5,
    maxZoom: 12,
    zoomControl: true,
    zoomSnap: 0.1,
    gestureHandling: true,
    layers: [
    ],
    zoom: 11,
    center: latLng([11.2840, 78.1108]),
  };

  // mapOptions = {
  //   attributionControl: false,
  //   center: latLng([11.1271, 78.6569]),
  // minZoom: 0,
  //   maxZoom: 15,
  //   zoomControl: false,
  //   zoomSnap: 0.25,
  //   zoom: 6.8,
  //   gestureHandling: true,
  //   // renderer: new L.SVG({
  //   //   padding: 1
  //   // }),
  //   layers: ['assets/geo-json/district.min.geojson'],
  // };

  geoJson = {
    url: 'assets/geo-json/district.min.geojson',
    style: {
      fillColor: '#EBEBEB',
      weight: 0.75,
      opacity: 1,
      color: '#707070',
      fillOpacity: 1,
    },
    defaultFeatureBg: '#EBEBEB',
  };

  map!: Map;

  // private map:any;

  constructor(private http: HttpClient) {

  }
  ngOnChanges(): void {}
  ngAfterViewInit(): void {
    // this.initMap();
  }

  ngOnInit(): void {

    // this.map.invalidateSize();
    // this.renderMapByDataSource();
    // this.RenderMap();
    this.cbeRenderMap();
  }


  onMapReady(map: Map): void {
    this.map = map;
  }

  RenderMap(): void {
    this.http.get(this.geoJson.url).subscribe((res: any) => {
      this.mapLayers.push(geoJSON(res, { style: this.geoJson.style }));
    });
  }

  cbeRenderMap(): void {
    this.http.get("assets/geo-json/namakkal.min.geojson").subscribe((res: any) => {
      this.mapLayers.push(geoJSON(res, { style: this.geoJson.style,
      
      }));
    });
  }
}
