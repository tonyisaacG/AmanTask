import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './Component/DepartmentComponent/department-list/department-list.component';
import { DepartmentEditComponent } from './Component/DepartmentComponent/department-edit/department-edit.component';
import { DepartmentDetailsComponent } from './Component/DepartmentComponent/department-details/department-details.component';
import { HomeComponent } from './Component/home/home.component';
import { FooterComponent } from './Component/Layout/footer/footer.component';
import { HeaderComponent } from './Component/Layout/header/header.component';
import { EmployeeListComponent } from './Component/EmployeeComponent/employee-list/employee-list.component';
import { EmployeeEditComponent } from './Component/EmployeeComponent/employee-edit/employee-edit.component';
import { EmployeeDetailsComponent } from './Component/EmployeeComponent/employee-details/employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenderPipe } from './Pipe/gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    DepartmentEditComponent,
    DepartmentDetailsComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeDetailsComponent,
    GenderPipe
  ],
  imports: [
    CommonModule,

    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
