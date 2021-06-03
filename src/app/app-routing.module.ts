import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DelhiComponent } from './delhi/delhi.component';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';
import { MaharashrtaComponent } from './maharashrta/maharashrta.component';
import { News1Component } from './news1/news1.component';
import { Newsportal1Component } from './newsportal1/newsportal1.component';
import { SportComponent } from './sport/sport.component';

const routes: Routes = 
[
  {path:'News1',component:News1Component},
  {path:'News2',component:Newsportal1Component},
  {path:'News3',component:SportComponent},
  {path:'Home',component:HomeComponent},
  {path:'Maha',component:MaharashrtaComponent},
  {path:'Del',component:DelhiComponent},
  {path:'News4',component:JobComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
