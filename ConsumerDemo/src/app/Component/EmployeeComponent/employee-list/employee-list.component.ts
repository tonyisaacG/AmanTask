import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/Models/employee-model';
import { EmployeeApiService } from 'src/app/Services/employee-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeApi:EmployeeApiService) { }

  ListEmployees:EmployeeModel[]=[]
  ngOnInit(): void {
    this.GetAllEmply();
  }


  GetAllEmply(){
    this.employeeApi.GetAll().subscribe(employeeList=>{
      this.ListEmployees = employeeList;
    })
  }

}
