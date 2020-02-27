import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../employee-details';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  eid:string;

  emp1 : Observable<EmployeeDetails>;

  constructor(private _emplist:EmployeeService) { 
    this.eid=localStorage.getItem("id");
    this.emp1 = this._emplist.getbyid(this.eid);

  }
 
  ngOnInit(): void {
  }

}
