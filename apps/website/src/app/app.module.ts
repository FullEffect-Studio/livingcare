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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { AgmCoreModule } from '@agm/core';
import { AutismComponent } from './pages/services/autism/autism.component';
import { LearningDisabilityComponent } from './pages/services/learning-disability/learning-disability.component';
import { PositiveBehaviourComponent } from './pages/services/positive-behaviour/positive-behaviour.component';
import { MentalHealthComponent } from './pages/services/mental-health/mental-health.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeSliderViewComponent } from './components/home-slider-view/home-slider-view.component';
import { ValuesSliderViewComponent } from './components/values-slider-view/values-slider-view.component';
import { ServiceVertCardViewComponent } from './components/service-vert-card-view/service-vert-card-view.component';
import { ServiceHoriCardViewComponent } from './components/service-hori-card-view/service-hori-card-view.component';

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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA20sB8VemHJcRLFDDKaLCK2lkfazkUCV0',
      libraries: ['places'],
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
