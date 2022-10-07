import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoutingModule } from './routing.module';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { SharedModule } from './shared/shared.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { AutismComponent } from './pages/services/autism/autism.component';
import { LearningDisabilityComponent } from './pages/services/learning-disability/learning-disability.component';
import { PositiveBehaviourComponent } from './pages/services/positive-behaviour/positive-behaviour.component';
import { MentalHealthComponent } from './pages/services/mental-health/mental-health.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeSliderViewComponent } from './components/home-slider-view/home-slider-view.component';
import { ValuesSliderViewComponent } from './components/values-slider-view/values-slider-view.component';
import { ServiceVertCardViewComponent } from './components/service-vert-card-view/service-vert-card-view.component';
import { ServiceHoriCardViewComponent } from './components/service-hori-card-view/service-hori-card-view.component';
import {NzNotificationModule} from "ng-zorro-antd/notification";
import {GoogleMapsModule} from "@angular/google-maps";
import { ScullyLibModule } from '@scullyio/ng-lib';
import {NgProgressModule} from "ngx-progressbar";
import {NgProgressHttpModule} from "ngx-progressbar/http";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    MobileMenuComponent,
    AutismComponent,
    LearningDisabilityComponent,
    PositiveBehaviourComponent,
    MentalHealthComponent,
    PageNotFoundComponent,
    HomeSliderViewComponent,
    ValuesSliderViewComponent,
    ServiceVertCardViewComponent,
    ServiceHoriCardViewComponent,
  ],
    imports: [
        BrowserModule,
        RoutingModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NzCarouselModule,
        NzNotificationModule,
        GoogleMapsModule,
        NgProgressModule.withConfig({
          trickleSpeed: 200,
          min: 20,
          meteor: false,
          color: '#06a9b2'
        }),
        NgProgressHttpModule,
        ReactiveFormsModule,
        ScullyLibModule,
    ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
