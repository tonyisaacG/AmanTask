import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployDepartModel } from 'src/app/Models/employ-depart-model';
import { EmployeeModel, Geneder } from 'src/app/Models/employee-model';
import { DepartmentApiService } from 'src/app/Services/department-api.service';
import { EmployeeApiService } from 'src/app/Services/employee-api.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  param:number| null=0;
  employeeEntity: EmployDepartModel = { id: 0,firstName:'',lastName:'',address:'',geneder:Geneder.Male,salary:0,doB:new Date('11-1-1998'),department_Id:0,department:{id:0,name:'',location:''}};

  constructor(private params: ActivatedRoute,
    private employee: EmployeeApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.params.paramMap.subscribe(param => {
      this.param = parseInt(param.get('id') ?? '');
      if (this.param > 0) {
        this.GetOne(this.param);
      }
      else{
        this.router.navigateByUrl("/");
      }
    });
  }

  GetOne(id: number) {
    this.employee.GetOne(id).subscribe(data => {
      this.employeeEntity.id = data.id;
      this.employeeEntity.firstName = data.firstName;
      this.employeeEntity.lastName = data.lastName;
      this.employeeEntity.address = data.address;
      this.employeeEntity.doB = data.doB;
      this.employeeEntity.salary = data.salary;
      this.employeeEntity.geneder = data.geneder;
      this.employeeEntity.department.name = data.department.name;
      this.employeeEntity.department.location = data.department.location;
      console.log(this.employeeEntity);
    })
  }

  DeleteEmpt(){

    this.employee.Delete(this.employeeEntity).subscribe(()=>{
      this.router.navigateByUrl('/Employee');
    });
  }
}
