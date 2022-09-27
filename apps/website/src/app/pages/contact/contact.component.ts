import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'livingcare-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  lat = 51.370656;
  lng = -0.1093368;

  constructor() {}

  ngOnInit(): void {}
}
