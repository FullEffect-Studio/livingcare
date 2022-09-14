import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'livingcare-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  array = [1, 2, 3];

  constructor() {}



  ngOnInit(): void {}
}
