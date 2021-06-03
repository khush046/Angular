import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { News1Component } from './news1/news1.component';
import { Newsportal1Component } from './newsportal1/newsportal1.component';
import { SportComponent } from './sport/sport.component';
import { HomeComponent } from './home/home.component';
import { MaharashrtaComponent } from './maharashrta/maharashrta.component';
import { DelhiComponent } from './delhi/delhi.component';
import { JobComponent } from './job/job.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    News1Component,
    Newsportal1Component,
    SportComponent,
    HomeComponent,
    MaharashrtaComponent,
    DelhiComponent,
    JobComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
