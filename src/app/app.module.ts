import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { EmplistComponent } from './emplist/emplist.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpComponent } from './emp/emp.component';
import { ManagerComponent } from './manager/manager.component';
const appRoutes: Routes = [
  {path:'dashboard', component:DashboardComponent,
  children :
  [ {path:'emp',component:EmpComponent},
  {path:'manager',component:ManagerComponent},

  ]},
  {path:'',component:EmplistComponent},
  {path:'login',component:LoginComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    LoginComponent,
    DashboardComponent,
    EmpComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
