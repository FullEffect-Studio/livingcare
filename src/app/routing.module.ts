import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {InitialNavigation, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ServicesComponent} from "./pages/services/services.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {AutismComponent} from "./pages/services/autism/autism.component";
import {LearningDisabilityComponent} from "./pages/services/learning-disability/learning-disability.component";
import {MentalHealthComponent} from "./pages/services/mental-health/mental-health.component";
import {PositiveBehaviourComponent} from "./pages/services/positive-behaviour/positive-behaviour.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'services/autism',
    component: AutismComponent,
  },
  {
    path: 'services/learning-disability',
    component: LearningDisabilityComponent
  },
  {
    path: 'services/mental-health',
    component: MentalHealthComponent
  },
  {
    path: 'services/positive-behaviour',
    component: PositiveBehaviourComponent
  },

  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledNonBlocking',
      scrollPositionRestoration: 'top',
      useHash: false
    }),
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
