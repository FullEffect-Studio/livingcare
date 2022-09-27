import { Component, OnInit } from '@angular/core';
import {servicesData} from "../../../core/data";

@Component({
  selector: 'livingcare-autism',
  templateUrl: './autism.component.html',
  styleUrls: ['./autism.component.scss'],
})
export class AutismComponent implements OnInit {
  services=servicesData
  constructor() {}

  ngOnInit(): void {}
}
