import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs';
// import {employeedetails} from './employee-details';
import 'rxjs/add/operator/map';
import { EmployeeDetails } from './employee-details';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http :Http) { }
  getlist() : Observable <EmployeeDetails[]> {
     return this.
     _http.get("http://localhost:8080/MLP187/api/employees").
     map((res: Response)=>res.json());

  }
// empId :string;
  getbyid(eid : string ) : Observable <EmployeeDetails> {
    return this.
    _http.get("http://localhost:8080/MLP187/api/employees/"+eid).
    map((res: Response)=>res.json());

 }

//   getbymid(mid : string) : Observable <EmployeeDetails> {
//     return this.
//     _http.get("http://localhost:8080/MLP187/api/employees/"+mid).
//     map((res: Response)=>res.json());
//  }
}
