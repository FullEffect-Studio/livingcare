import {ServiceID} from "./enums";
import {SubService} from "./models/SubService";


export const servicesData: SubService[] = [
  {
    serviceId: ServiceID.Autism,
    imageUrl: 'assets/images/autism_edit.jpg',
    label: 'Autism',
    summary: 'Living with Autism can make daily life difficult. The level of difficulty will be different from one person to the other....',
    link: '/services/autism',
    styleClasses: 'bg-right-top'
  },

  {
    serviceId: ServiceID.LearningDisability,
    imageUrl: 'assets/images/learningdisability_edit.jpg',
    label: 'Learning Disability',
    summary: 'Regardless of age or presumptive ability, we think that everyone can live a good life with favorable outcomes....',
    link: '/services/learning-disability',
    styleClasses: 'bg-center'
  },


  {
    serviceId: ServiceID.MentalHealth,
    imageUrl: 'assets/images/mentalhealth1.jpg',
    label: 'Mental Health',
    summary: 'We work collaboratively with Health and Specialist mental health services to provide assistance...',
    link: '/services/mental-health',
    styleClasses: 'bg-left'
  },

  {
    serviceId: ServiceID.PositiveBehaviour,
    imageUrl: 'assets/images/about_edit.jpg',
    label: 'Positive Behaviour',
    summary: 'Through our Positive Behaviour Support services, we specialise in supporting adults with autism,...',
    link: '/services/positive-behaviour',
    styleClasses: 'bg-right'
  },

]
