import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Lab1Component } from './lab1/lab1.component';
import { Lab2Component } from './lab2/lab2.component';
import { Lab3Component } from './lab3/lab3.component';
import { Lab4Component } from './lab4/lab4.component';
import { Assignment1Component } from './assignment1/assignment1.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lab1', component: Lab1Component },
  { path: 'lab2', component: Lab2Component },
  { path: 'lab3', component: Lab3Component },
  { path: 'lab4', component: Lab4Component },
  { path: 'assignment1', component: Assignment1Component },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
