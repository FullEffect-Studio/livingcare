import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {AutismComponent} from "./autism/autism.component";
import {LearningDisabilityComponent} from "./learning-disability/learning-disability.component";
import {MentalHealthComponent} from "./mental-health/mental-health.component";
import {PositiveBehaviourComponent} from "./positive-behaviour/positive-behaviour.component";

const routes: Routes = [
  {
    path: 'autism',
    component: AutismComponent,
  },
  {
    path: 'learning-disability',
    component: LearningDisabilityComponent
  },
  {
    path: 'mental-health',
    component: MentalHealthComponent
  },
  {
    path: 'positive-behaviour',
    component: PositiveBehaviourComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServicesPageModule { }
