import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDetails} from '../employee-details';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  
  mid:string;
  emp2 : Observable<EmployeeDetails>;
  constructor(private _emplist:EmployeeService) { 
    this.mid=localStorage.getItem("mid");
    alert(this.mid);
    this.emp2 = this._emplist.getbyid(this.mid);
  
  }
 
  ngOnInit(): void {
  }

}
