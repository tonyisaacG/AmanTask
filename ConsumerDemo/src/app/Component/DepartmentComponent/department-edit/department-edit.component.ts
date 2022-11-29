import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { DepartmentModel } from 'src/app/Models/department-model';
import { DepartmentApiService } from 'src/app/Services/department-api.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.scss']
})
export class DepartmentEditComponent implements OnInit {

  Edit: boolean = true;
  param!: number | null;
  title: string = 'Add New Department';
  BtnName: string = "Create";
  departmentEntity: DepartmentModel = { id: 0, name: '', location: '' };

  constructor(private params: ActivatedRoute,
    private department: DepartmentApiService,
    private router: Router) { }

  ngOnInit(): void {
    // this.id = this.params.snapshot.paramMap.get('id')

    this.params.paramMap.subscribe(param => {
      this.param = parseInt(param.get('id') ?? '');
      if (this.param > 0) {
        this.GetOne(this.param);
        this.title = 'Edit Department';
        this.BtnName = "Edit";
        this.Edit = true;
      }
      else {
        this.title = 'Add New Department';
        this.BtnName = "Create";
        this.Edit = false;
      }
    })

  }


  GetOne(id: number) {
    this.department.GetOne(id).subscribe(data => {
      this.departmentEntity.id = data.id;
      this.departmentEntity.name = data.name;
      this.departmentEntity.location = data.location;
    })
  }


  Department_add_edit() {
    if (this.Edit) {
      this.department.Update(this.departmentEntity).subscribe(()=>{
        this.router.navigateByUrl('/Department');
      });
    }
    else {
      this.department.Add(this.departmentEntity).subscribe(()=>{
        this.router.navigateByUrl('/Department');
      });
    }
  }
}
