import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from '../employee-details';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  emp : Observable<EmployeeDetails[]>;
  constructor(private _router:Router,private _emplist:EmployeeService) { 
    this.emp = this._emplist.getlist();
  }
  empId : number;
  login(Id,fullName,mgid) {
    localStorage.setItem("id",Id);
    localStorage.setItem("pwd",fullName);
    localStorage.setItem("mid",mgid);
    alert("Manager Id " +mgid);
    alert(mgid);
    // this.empId = Id;
    this._router.navigate(["/login"]);
  }


  ngOnInit(): void {
  }

}
