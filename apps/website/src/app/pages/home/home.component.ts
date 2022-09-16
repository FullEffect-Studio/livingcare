import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'livingcare-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  array = [1, 2, 3];
  services = servicesListData;
  constructor() {}




  ngOnInit(): void {}
}

interface Service{
  id: number
  label: string
  url: string
}

interface  SubService{
  id: number,
  serviceId: number
  imageUrl: string
  label: string
  summary: string
  link: string
}

export enum ServiceID{
  ElderPeople = 1,
  MonitoringAndDiagnostics,
  PeopleWithDisabilties,
  RehabilitationAndRecovery
}

const servicesListData:Service[] = [
  {
    id: ServiceID.ElderPeople,
    label: 'For the elderly people',
    url: ''
  },
  {
    id: ServiceID.MonitoringAndDiagnostics,
    label: 'Monitoring & Diagnostics',
    url: ''
  },
  {
    id: ServiceID.PeopleWithDisabilties,
    label: 'People with disabilities',
    url: ''
  },
  {
    id: ServiceID.RehabilitationAndRecovery,
    label: 'Rehabilitation and recovery',
    url: ''
  }
]

const subServicesListData: SubService[] = [
  {
    id: 1,
    serviceId: ServiceID.ElderPeople,
    imageUrl: 'assets/images/medical_care.jpg',
    label: 'Medical care and care',
    summary: 'Responsible and diligent approach to each patient. The optimum ratio of price and quality. High quality health care and service....',
    link: ''
  },
  {
    id: 2,
    serviceId: ServiceID.ElderPeople,
    imageUrl: 'assets/images/care_and_help.jpg',
    label: 'Care and help at home',
    summary: 'Responsible and diligent approach to each patient. The optimum ratio of price and quality. High quality health care and service....',
    link: ''
  },
  {
    id: 3,
    serviceId: ServiceID.ElderPeople,
    imageUrl: 'assets/images/specialized_care.jpg',
    label: 'Specialized Care',
    summary: 'High quality health care and service. Advanced medical technologies and innovative diagnosis and treatment methods....',
    link: ''
  },

  {
    id: 4,
    serviceId: ServiceID.MonitoringAndDiagnostics,
    imageUrl: 'assets/images/specialized_care.jpg',
    label: 'Specialized Care',
    summary: 'High quality health care and service. Advanced medical technologies and innovative diagnosis and treatment methods....',
    link: ''
  },

  {
    id: 5,
    serviceId: ServiceID.PeopleWithDisabilties,
    imageUrl: 'assets/images/specialized_care.jpg',
    label: 'Specialized Care',
    summary: 'High quality health care and service. Advanced medical technologies and innovative diagnosis and treatment methods....',
    link: ''
  },

  {
    id: 6,
    serviceId: ServiceID.RehabilitationAndRecovery,
    imageUrl: 'assets/images/specialized_care.jpg',
    label: 'Specialized Care',
    summary: 'High quality health care and service. Advanced medical technologies and innovative diagnosis and treatment methods....',
    link: ''
  },

]
