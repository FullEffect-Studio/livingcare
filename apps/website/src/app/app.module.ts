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
  ],
  imports: [BrowserModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
