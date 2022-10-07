import { Component, OnInit } from '@angular/core';
import {servicesData} from "../../../core/data";

@Component({
  selector: 'livingcare-learning-disability',
  templateUrl: './learning-disability.component.html',
  styleUrls: ['./learning-disability.component.scss'],
})
export class LearningDisabilityComponent implements OnInit {
  services=servicesData
  constructor() {}

  ngOnInit(): void {}
}
