import { Data } from "@angular/router";

export interface EmployeeModel {
    id:number,
    firstName:string,
    lastName:string,
    doB:Data|null,
    geneder:Geneder,
    salary:number,
    address:string,
    department_Id:number
}
export enum Geneder{
    Male,
    Femmale
}
