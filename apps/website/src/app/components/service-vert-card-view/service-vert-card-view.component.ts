import {Component, Input, OnInit} from '@angular/core';
import {SubService} from "../../core/models/SubService";

@Component({
  selector: 'livingcare-service-vert-card-view',
  templateUrl: './service-vert-card-view.component.html',
  styleUrls: ['./service-vert-card-view.component.scss'],
})
export class ServiceVertCardViewComponent {
  @Input()
  service: SubService|null = null

}
