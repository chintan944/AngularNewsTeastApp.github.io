import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusbusinessComponent } from './busbusiness/busbusiness.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
{path:'', component:TopheadingComponent}, //home
{path:'tech', component:TechnewsComponent}, //tech news
{path:'business', component:BusbusinessComponent}, //tech news

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
