import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError,Observable,throwError } from 'rxjs';
import { GlobalVariable } from '../Global/global-variable';
import { DepartmentModel } from '../Models/department-model';
@Injectable({
  providedIn: 'root'
})
export class DepartmentApiService {

  constructor(private http:HttpClient) { }

    

  GetAll():Observable<DepartmentModel[]>{
    return this.http.get<DepartmentModel[]>(`${environment.UrlApi}/Departments/GetAll`,{headers:GlobalVariable.headerJson()})
    .pipe(catchError(error=>{return throwError(()=>error)}));
  }

  GetOne(id:number):Observable<DepartmentModel>{
    return this.http.get<DepartmentModel>(`${environment.UrlApi}/Departments/GetOne/${id}`,{headers:GlobalVariable.headerJson()})
    .pipe(catchError(error=>{return throwError(()=>error)}));
  }

  Add(entity:DepartmentModel):Observable<DepartmentModel>{
    console.log(entity);
    return this.http.post<DepartmentModel>(`${environment.UrlApi}/Departments/Add`,entity,{headers:GlobalVariable.headerJson()})
    .pipe(catchError(error=>{return throwError(()=>error)}));
  }

  Update(entity:DepartmentModel):Observable<DepartmentModel>{
    return this.http.post<DepartmentModel>(`${environment.UrlApi}/Departments/Update`,entity,{headers:GlobalVariable.headerJson()})
    .pipe(catchError(error=>{return throwError(()=>error)}));
  }

  Delete(entity:DepartmentModel){
    return this.http.post(`${environment.UrlApi}/Departments/Delete`,entity,{headers:GlobalVariable.headerJson()})
    .pipe(catchError(error=>{return throwError(()=>error)}));
  }

}