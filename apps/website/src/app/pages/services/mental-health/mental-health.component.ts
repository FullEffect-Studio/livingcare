import { Component, OnInit } from '@angular/core';
import {servicesData} from "../../../core/data";

@Component({
  selector: 'livingcare-mental-health',
  templateUrl: './mental-health.component.html',
  styleUrls: ['./mental-health.component.scss'],
})
export class MentalHealthComponent implements OnInit {
  services=servicesData
  constructor() {}

  ngOnInit(): void {}
}
