import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, combineLatest, combineLatestAll, map, Observable} from "rxjs";

@Component({
  selector: 'livingcare-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  array = [1, 2, 3];
  selectedService = new BehaviorSubject<ServiceID>(ServiceID.ElderPeople)
  services = new BehaviorSubject<Service[]>(servicesListData);
  subServices = new BehaviorSubject<SubService[]>(subServicesListData)

  viewModel$:Observable<SubService[]> = combineLatest([
    this.selectedService,
    this.subServices
  ]).pipe(
    map(([selected, subService]) => {
      return subService.filter(e => e.serviceId === selected)
    })
  )

  constructor() {}




  ngOnInit(): void {}

  onSelectedServiceChanged(id: number) {
    this.selectedService.next(id);
  }
}

export interface Service{
  id: number
  label: string
  url: string
}

export interface  SubService{
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
    serviceId: ServiceID.ElderPeople,
    imageUrl: 'assets/images/medical_care.jpg',
    label: 'Medical care and care',
    summary: 'Responsible and diligent approach to each patient. The optimum ratio of price and quality. High quality health care and service....',
    link: ''
  },
  {
    serviceId: ServiceID.ElderPeople,
    imageUrl: 'assets/images/care_and_help.jpg',
    label: 'Care and help at home',
    summary: 'Responsible and diligent approach to each patient. The optimum ratio of price and quality. High quality health care and service....',
    link: ''
  },
  {
    serviceId: ServiceID.ElderPeople,
    imageUrl: 'assets/images/specialized_care.jpg',
    label: 'Specialized Care',
    summary: 'High quality health care and service. Advanced medical technologies and innovative diagnosis and treatment methods....',
    link: ''
  },

  {
    serviceId: ServiceID.MonitoringAndDiagnostics,
    imageUrl: 'assets/images/specialized_care.jpg',
    label: 'Specialized Care',
    summary: 'High quality health care and service. Advanced medical technologies and innovative diagnosis and treatment methods....',
    link: ''
  },
  {
    serviceId: ServiceID.MonitoringAndDiagnostics,
    imageUrl: 'assets/images/doctors_visit.jpg',
    label: "Doctor's visit to the house",
    summary: 'High quality health care and service. Advanced medical technologies and innovative diagnosis and treatment methods....',
    link: ''
  },

  {
    serviceId: ServiceID.PeopleWithDisabilties,
    imageUrl: 'assets/images/specialized_care.jpg',
    label: 'Specialized Care',
    summary: 'High quality health care and service. Advanced medical technologies and innovative diagnosis and treatment methods....',
    link: ''
  },

  {
    serviceId: ServiceID.RehabilitationAndRecovery,
    imageUrl: 'assets/images/specialized_care.jpg',
    label: 'Specialized Care',
    summary: 'High quality health care and service. Advanced medical technologies and innovative diagnosis and treatment methods....',
    link: ''
  },
  {
    serviceId: ServiceID.RehabilitationAndRecovery,
    imageUrl: 'assets/images/doctors_visit.jpg',
    label: "Doctor's visit to the house",
    summary: 'High quality health care and service. Advanced medical technologies and innovative diagnosis and treatment methods....',
    link: ''
  },

]
