import { DepartmentModel } from "./department-model";
import { EmployeeModel } from "./employee-model";

export interface EmployDepartModel extends EmployeeModel {
    "department":DepartmentModel
}
