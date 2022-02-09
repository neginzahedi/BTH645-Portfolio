import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Lab1Component } from './labs/lab1/lab1.component';
import { Lab2Component } from './labs/lab2/lab2.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'lab1', component: Lab1Component},
  {path: 'lab2', component:Lab2Component},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
