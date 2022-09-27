import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {servicesData} from "../../core/data";
import {SubService} from "../../core/models/SubService";
import * as Aos from 'aos';

@Component({
  selector: 'livingcare-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{



  services$$ = new BehaviorSubject<SubService[]>(servicesData)

  lat = 51.370656;
  lng = -0.1093368;

  ngOnInit(): void {
    Aos.init({})
  }
}






