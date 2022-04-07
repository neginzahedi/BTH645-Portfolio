import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// Labs
import { Lab1Component } from './labs/lab1/lab1.component';
import { Lab2Component } from './labs/lab2/lab2.component';
import { Lab3Component } from './labs/lab3/lab3.component';
import { Lab4Component } from './labs/lab4/lab4.component';
import { Lab5Component } from './labs/lab5/lab5.component';
// Assignments
import { Assignment1Component } from './assignment1/assignment1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    Lab1Component,
    FooterComponent,
    Lab2Component,
    Lab3Component,
    Lab4Component,
    Assignment1Component,
    Lab5Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
