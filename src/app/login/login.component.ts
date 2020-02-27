import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../employee-details';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName : string;
  password : string;
  pasCode : string;
  // managerid : string;
  // emp1 : Observable<EmployeeDetails[]>;
  constructor(private _router:Router,private _emplist:EmployeeService) { 
    this.userName=localStorage.getItem('id');
    this.pasCode = localStorage.getItem("pwd");
    // this.emp1 = this._emplist.getbyid(this.userName);
  }
  login(){
    if (this.password!=null){
            if( this.password== this.pasCode){
              alert("LOGGING IN...");
              this._router.navigate(['/dashboard']);
            } else {
              alert ("incorrect password...");
            }
        } else {
          alert("You need to Enter your credentials first!!");
        }
      }
// details(){

// }
  ngOnInit(): void {
  }

}
