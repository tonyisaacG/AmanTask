import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from 'src/app/Models/department-model';
import { DepartmentApiService } from 'src/app/Services/department-api.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  constructor(private departmentApi:DepartmentApiService) { }

  ListDepartment:DepartmentModel[]=[]
  ngOnInit(): void {
    this.GetAllDepat();
  }


  GetAllDepat(){
    this.departmentApi.GetAll().subscribe(departmentList=>{
      this.ListDepartment = departmentList;
      console.log(this.ListDepartment);
    })
  }

}
