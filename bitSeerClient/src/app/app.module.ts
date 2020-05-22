import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './sections/header/header.component';
import { IntroComponent } from './sections/intro/intro.component';
import { FeaturesComponent } from './sections/features/features.component';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BenefitsComponent } from './sections/benefits/benefits.component';
import { OfferComponent } from './sections/offer/offer.component';
import { ParticlesModule } from 'angular-particle';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TokenInterceptorService } from './core/token-interceptor.service';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    FeaturesComponent,
    BenefitsComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgsRevealModule,
    HttpClientModule,
    AngularSvgIconModule,
    ParticlesModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
