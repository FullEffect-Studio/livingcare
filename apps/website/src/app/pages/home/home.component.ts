import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, combineLatest, combineLatestAll, map, Observable} from "rxjs";

@Component({
  selector: 'livingcare-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  array = [1, 2, 3];
  selectedService = new BehaviorSubject<ServiceID>(ServiceID.MonitoringAndDiagnostics)
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

  lat = 51.370656;
  lng = -0.1093368;





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
    label: 'Autism',
    url: ''
  },
  {
    id: ServiceID.MonitoringAndDiagnostics,
    label: 'Learning disability',
    url: ''
  },
  {
    id: ServiceID.PeopleWithDisabilties,
    label: 'Positive behavioural',
    url: ''
  },
  {
    id: ServiceID.RehabilitationAndRecovery,
    label: 'Mental Health',
    url: ''
  }
]

const subServicesListData: SubService[] = [
  {
    serviceId: ServiceID.ElderPeople,
    imageUrl: 'assets/images/autism_service1.jpg',
    label: 'Our Aim',
    summary: 'Our aim is to develop the skills of the people we support to help them....',
    link: ''
  },
  {
    serviceId: ServiceID.ElderPeople,
    imageUrl: 'assets/images/autism_service2.jpg',
    label: 'Our Autism services',
    summary: 'From the safe, structured and homely environments to a staff team with ....',
    link: ''
  },
  {
    serviceId: ServiceID.ElderPeople,
    imageUrl: 'assets/images/specialized_care.jpg',
    label: 'Our Unique Approach',
    summary: 'We always involve people in deciding how they are supported, as we know that everyone....',
    link: ''
  },

  {
    serviceId: ServiceID.MonitoringAndDiagnostics,
    imageUrl: 'assets/images/learningdisability1.jpg',
    label: 'learning disability services',
    summary: 'We are committed to delivering genuinely person-centred services.....',
    link: ''
  },
  {
    serviceId: ServiceID.MonitoringAndDiagnostics,
    imageUrl: 'assets/images/learningdisability2.jpg',
    label: "Our Unique Approach",
    summary: 'We understand that living with a learning disability can make a number of daily tasks....',
    link: ''
  },

  {
    serviceId: ServiceID.PeopleWithDisabilties,
    imageUrl: 'assets/images/specialized_care2.jpg',
    label: 'positive behavioural services',
    summary: 'Our specialists will assess the relationship between the behaviours that challenge....',
    link: ''
  },

  {
    serviceId: ServiceID.RehabilitationAndRecovery,
    imageUrl: 'assets/images/mentalhealth1.jpg',
    label: 'Mental health services',
    summary: 'Mental health is something that we can all relate to and something we provide support for.....',
    link: ''
  },
  {
    serviceId: ServiceID.RehabilitationAndRecovery,
    imageUrl: 'assets/images/mentalhealth2.jpg',
    label: "Our Unique Approach",
    summary: 'We understand that suitable housing with the right support is an essential part of overcoming mental health....',
    link: ''
  },

]
