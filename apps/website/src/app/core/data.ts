import {ServiceID} from "./enums";
import {SubService} from "./models/SubService";


export const servicesData: SubService[] = [
  {
    serviceId: ServiceID.Autism,
    imageUrl: 'assets/images/autism_service1.jpg',
    label: 'Autism',
    summary: 'We understand that living with an autistic spectrum disorder (ASD) including Asperger Syndrome can make...',
    link: '/services/autism'
  },

  {
    serviceId: ServiceID.LearningDisability,
    imageUrl: 'assets/images/learningdisability1.jpg',
    label: 'Learning Disability',
    summary: 'We understand that living with a learning disability can make a number of daily tasks and situations...',
    link: '/services/learning-disability'
  },


  {
    serviceId: ServiceID.MentalHealth,
    imageUrl: 'assets/images/specialized_care2.jpg',
    label: 'Mental Health',
    summary: 'We understand that suitable housing with the right support is an essential part of overcoming mental...',
    link: '/services/mental-health'
  },

  {
    serviceId: ServiceID.PositiveBehaviour,
    imageUrl: 'assets/images/mentalhealth1.jpg',
    label: 'Positive Behaviour',
    summary: 'Through our Positive Behaviour Support services, we specialise in supporting adults with autism,...',
    link: '/services/positive-behaviour'
  },

]
