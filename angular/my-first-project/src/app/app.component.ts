import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Hello ANGULAR!';
  loremipsum = 'Lorem ipsum dolor sit amet';
  name = "John Dow";
  myBgColor='pink';
  testValue = 10;
  isAdmin = false;
  adminLoggedIn:boolean = false;
  constructor(
    private loginService: LoginService
  ){
  
  }
  ngOnInit(){
    this.loginService.isAdminLoggedin().then(
      (administrator: any) => {
        if(administrator){
          this.adminLoggedIn = true;
        }else{
          this.adminLoggedIn = false;
        }
      }
    );
  }
  loginAdmin(){
    this.loginService.loginAdmin();
    this.isAdmin = this.loginService.isAdmin;
  }
  logoutAdmin(){
    this.loginService.logoutAdmin();
    this.isAdmin = this.loginService.isAdmin;
  }
}
