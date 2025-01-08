import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { FeatureComponent } from './components/feature/feature.component';
import { TeamComponent } from './components/team/team.component';
import { FaqComponent } from './components/faq/faq.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ActionComponent } from './components/action/action.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from "@angular/material/table";
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    FeatureComponent,
    TeamComponent,
    FaqComponent,
    PricingComponent,
    NewsLetterComponent,
    TestimonialComponent,
    ActionComponent,
    BlogComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    AboutPageComponent,
    ServicesPageComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
