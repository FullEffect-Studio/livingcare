
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {NzNotificationService} from "ng-zorro-antd/notification";


@Component({
  selector: 'livingcare-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  center: google.maps.LatLngLiteral = {
    lat:  51.370656,
    lng: -0.1093368,
  };

  options: google.maps.MapOptions = {
    // mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder,
              private notificationService: NzNotificationService,
              private http: HttpClient) {

  }

  ngOnInit(): void {}

  submit() {
    const payload = {
      name: this.form.get('name')!.value,
      email: this.form.get('email')!.value,
      subject: this.form.get('subject')!.value,
      message: this.form.get('message')!.value,
    }

    console.log(payload)
    this.http.post('https://us-central1-yesapp-10da7.cloudfunctions.net/helloWorld', payload).subscribe(() => {
      this.form.reset()
      this.notificationService.success('Your message has been received!', 'Our team will contact you very soon via your email. Thank you')
    }, error => this.notificationService.error('Ops! An error occurred', ''))
  }
}
