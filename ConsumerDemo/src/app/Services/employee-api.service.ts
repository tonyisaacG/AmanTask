import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GlobalVariable } from '../Global/global-variable';
import { EmployDepartModel } from '../Models/employ-depart-model';
import { EmployeeModel } from '../Models/employee-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  
  constructor(private http:HttpClient) { }

    

  GetAll():Observable<EmployeeModel[]>{
    return this.http.get<EmployeeModel[]>(`${environment.UrlApi}/Employees/GetAll`,{headers:GlobalVariable.headerJson()})
    .pipe(catchError(error=>{return throwError(()=>error)}));
  }

  GetOne(id:number):Observable<EmployDepartModel>{
    return this.http.get<EmployDepartModel>(`${environment.UrlApi}/Employees/GetOne/${id}`,{headers:GlobalVariable.headerJson()})
    .pipe(catchError(error=>{return throwError(()=>error)}));
  }

  Add(entity:EmployeeModel):Observable<EmployeeModel>{
    return this.http.post<EmployeeModel>(`${environment.UrlApi}/Employees/Add`,entity,{headers:GlobalVariable.headerJson()})
    .pipe(catchError(error=>{return throwError(()=>error)}));
  }

  Update(entity:EmployeeModel):Observable<EmployeeModel>{
    return this.http.post<EmployeeModel>(`${environment.UrlApi}/Employees/Update`,entity,{headers:GlobalVariable.headerJson()})
    .pipe(catchError(error=>{return throwError(()=>error)}));
  }

  Delete(entity:EmployeeModel){
    return this.http.post(`${environment.UrlApi}/Employees/Delete`,entity,{headers:GlobalVariable.headerJson()})
    .pipe(catchError(error=>{return throwError(()=>error)}));
  }

}