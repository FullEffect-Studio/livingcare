import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'livingcare-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  showMobileMenu = false;
  constructor() {}

  ngOnInit(): void {}
}
