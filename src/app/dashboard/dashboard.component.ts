import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../employee-details';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(){
  }
  
  ngOnInit(): void {
  }

}
