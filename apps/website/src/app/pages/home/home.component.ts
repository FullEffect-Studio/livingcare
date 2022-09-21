import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {servicesData} from "../../core/data";
import {SubService} from "../../core/models/SubService";

@Component({
  selector: 'livingcare-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {
  services$$ = new BehaviorSubject<SubService[]>(servicesData)

  lat = 51.370656;
  lng = -0.1093368;

}






