import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'livingcare-home-slider-view',
  templateUrl: './home-slider-view.component.html',
  styleUrls: ['./home-slider-view.component.scss'],
})
export class HomeSliderViewComponent  {
  @Input()
  imageUrl = '';

  @Input()
  content = ''


}
