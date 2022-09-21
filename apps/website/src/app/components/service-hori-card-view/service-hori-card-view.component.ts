import {Component, Input, OnInit} from '@angular/core';
import {SubService} from "../../core/models/SubService";

@Component({
  selector: 'livingcare-service-hori-card-view',
  templateUrl: './service-hori-card-view.component.html',
  styleUrls: ['./service-hori-card-view.component.scss'],
})
export class ServiceHoriCardViewComponent  {
  @Input() service: SubService|null = null;
}
