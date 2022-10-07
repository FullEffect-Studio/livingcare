import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {servicesData} from "../../core/data";
import {ServiceID} from "../../core/enums";
import { SubService } from '../../core/models/SubService';
import { Service } from '../../core/models/Service';

@Component({
  selector: 'livingcare-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent  {
  services$$ = new BehaviorSubject<SubService[]>(servicesData)

}
