import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'livingcare-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input()
  showMobileMenu = false

  @Output()
  toggle  = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.toggle.emit(!this.showMobileMenu)
  }
}
