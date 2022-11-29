import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentModel } from 'src/app/Models/department-model';
import { EmployeeModel, Geneder } from 'src/app/Models/employee-model';
import { DepartmentApiService } from 'src/app/Services/department-api.service';
import { EmployeeApiService } from 'src/app/Services/employee-api.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  Edit: boolean = true;
  param!: number | null;
  title: string = 'Add New Employee';
  BtnName: string = "Create";
  departments: DepartmentModel[] = [];
  employeeEntity: EmployeeModel = { id: 0, firstName: '', lastName: '', address: '', geneder:Geneder.Femmale, salary: 1, doB: null, department_Id: 0 };
  selectDepartment:boolean=true;
  maxDate:string =  new Date().toLocaleDateString();
  
  constructor(private params: ActivatedRoute,
    private employee: EmployeeApiService,
    private department: DepartmentApiService,
    private router: Router) { }

  ngOnInit(): void {
    
    // this.id = this.params.snapshot.paramMap.get('id')
    this.GetDepartments();
    this.params.paramMap.subscribe(param => {
      this.param = parseInt(param.get('id') ?? '');
      if (this.param > 0) {
        this.GetOne(this.param);
        this.title = 'Edit Employee';
        this.BtnName = "Edit";
        this.Edit = true;
      }
      else {
        this.title = 'Add New Employee';
        this.BtnName = "Create";
        this.Edit = false;
      }
    })

  }


  GetOne(id: number) {
    this.employee.GetOne(id).subscribe(data => {
      this.employeeEntity.id = data.id;
      this.employeeEntity.firstName = data.firstName;
      this.employeeEntity.lastName = data.lastName;
      this.employeeEntity.geneder = data.geneder;
      this.employeeEntity.doB = data.doB;
      this.employeeEntity.address = data.address;
      this.employeeEntity.salary = data.salary;
      this.employeeEntity.department_Id = data.department_Id;
      console.log(this.employeeEntity);
    })
  }

  GetDepartments() {
    this.department.GetAll().subscribe(departments => {
      this.departments = departments;
    })
  }

  Employee_add_edit() {
    console.log(this.employeeEntity);
    if (this.Edit) {
      this.employeeEntity.geneder = +this.employeeEntity.geneder;
      this.employee.Update(this.employeeEntity).subscribe(() => {
        this.router.navigateByUrl('/Employee');
      });
    }
    else {
      if (this.employeeEntity.department_Id > 0) {
        this.employeeEntity.geneder = +this.employeeEntity.geneder;
        this.employee.Add(this.employeeEntity).subscribe(() => {
          this.router.navigateByUrl('/Employee');
        });
        
      }
      else{this.selectDepartment=false;}
    }
  }


  onSelect(){
    this.selectDepartment =true;
  }
}
