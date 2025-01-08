import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutPageComponent} from "./components/pages/about-page/about-page.component";
import {ServicesPageComponent} from "./components/pages/services-page/services-page.component";
import {ContactUsComponent} from "./components/pages/contact-us/contact-us.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

