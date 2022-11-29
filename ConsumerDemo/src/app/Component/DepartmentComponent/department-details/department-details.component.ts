import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentModel } from 'src/app/Models/department-model';
import { DepartmentApiService } from 'src/app/Services/department-api.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {

  param:number|null=0;
  departmentEntity: DepartmentModel = { id: 0, name: '', location: '' };

  constructor(private params: ActivatedRoute,
    private department: DepartmentApiService,
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
    this.department.GetOne(id).subscribe(data => {
      this.departmentEntity.id = data.id;
      this.departmentEntity.name = data.name;
      this.departmentEntity.location = data.location;
    })
  }

  DeleteDept(){
    this.department.Delete(this.departmentEntity).subscribe(()=>{
      this.router.navigateByUrl('/Department');
    });
  }
}
