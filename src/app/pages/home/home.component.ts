import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {servicesData} from "../../core/data";
import {SubService} from "../../core/models/SubService";
import * as Aos from "aos";


@Component({
  selector: 'livingcare-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{


  center: google.maps.LatLngLiteral = {
    lat:  51.370656,
    lng: -0.1093368,
  };

  options: google.maps.MapOptions = {
    // mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  services$$ = new BehaviorSubject<SubService[]>(servicesData)

  ngOnInit(): void {
    Aos.init({})
  }
}






