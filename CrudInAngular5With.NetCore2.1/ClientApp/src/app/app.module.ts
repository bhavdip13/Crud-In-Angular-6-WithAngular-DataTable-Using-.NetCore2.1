import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { FetchEmployeeComponent } from './Components/fetch-employee/fetch-employee.component';
import { EmpserviceService } from './empservice.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AddEmployeeComponent,
    FetchEmployeeComponent
  ],
  
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'fetch-employee', component: FetchEmployeeComponent },
      { path: 'add-employee', component: AddEmployeeComponent },
      { path: 'employee/edit/:id', component: AddEmployeeComponent },
      { path: '**', redirectTo: 'home' }  


    ])
  ],
  providers: [EmpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
