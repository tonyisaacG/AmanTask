import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './Component/DepartmentComponent/department-details/department-details.component';
import { DepartmentEditComponent } from './Component/DepartmentComponent/department-edit/department-edit.component';
import { DepartmentListComponent } from './Component/DepartmentComponent/department-list/department-list.component';
import { EmployeeDetailsComponent } from './Component/EmployeeComponent/employee-details/employee-details.component';
import { EmployeeEditComponent } from './Component/EmployeeComponent/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './Component/EmployeeComponent/employee-list/employee-list.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Department',component:DepartmentListComponent},
  {path:'AddDepartment',component:DepartmentEditComponent},
  {path:'EditDepartment/:id',component:DepartmentEditComponent},
  {path:'DetailsDepartment/:id',component:DepartmentDetailsComponent},
  {path:'Employee',component:EmployeeListComponent},
  {path:'AddEmployee',component:EmployeeEditComponent},
  {path:'EditEmployee/:id',component:EmployeeEditComponent},
  {path:'DetailsEmployee/:id',component:EmployeeDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
