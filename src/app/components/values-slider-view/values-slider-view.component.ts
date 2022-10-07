import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'livingcare-values-slider-view',
  templateUrl: './values-slider-view.component.html',
  styleUrls: ['./values-slider-view.component.scss'],
})
export class ValuesSliderViewComponent  {
  @Input()
  title = '';

  @Input()
  description = ''

}
