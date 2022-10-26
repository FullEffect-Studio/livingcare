import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'livingcare-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {

  @Input()
  visible = false

  @Output()
  visibilityChanged = new EventEmitter()

  constructor() {}

  ngOnInit(): void {

  }

  toggleVisibility() {
    this.visibilityChanged.emit(!this.visible)
  }

  onActiveChange() {
    if(this.visible){
      this.visibilityChanged.emit(!this.visible)
    }
  }
}
