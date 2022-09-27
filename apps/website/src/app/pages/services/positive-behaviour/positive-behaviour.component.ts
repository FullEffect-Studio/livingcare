import { Component, OnInit } from '@angular/core';
import {servicesData} from "../../../core/data";

@Component({
  selector: 'livingcare-positive-behaviour',
  templateUrl: './positive-behaviour.component.html',
  styleUrls: ['./positive-behaviour.component.scss'],
})
export class PositiveBehaviourComponent implements OnInit {
  services=servicesData
  constructor() {}

  ngOnInit(): void {}
}
