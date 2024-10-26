import { OverlayContainer } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import {  HostBinding, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { NgxSpinnerService } from 'ngx-spinner';
import{filter} from 'rxjs/operators'
import { UsersService } from './services/users.service';
import { SweetAlertServiceService } from './services/sweet-alert-service.service';
import { AuthService } from './services/auth.service';
import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  isLoggedIn = !!localStorage.getItem('isLoggedIn');
  title = 'EverAdminPanel';
  private sidenav: MatSidenav;
  code:number;
  public isMenuOpen = true;
  loginForm: FormGroup;
  navitems: any;
  showHead:boolean=false;
 
    constructor(private overlay:OverlayContainer,
    private fb: FormBuilder,private router:Router,private users:UsersService,
    private spinner:NgxSpinnerService,private auths:AuthService,
    private salert:SweetAlertServiceService){
      this.isMenuOpen = false;
   
      console.log('login user',this.auths.getCurrentUser())

}
 
      
ngOnInit() {
  this.toggleControl.valueChanges.subscribe(
    (darkMode:any)=>{
      this.className= darkMode ? this.darkClassName : this.lightClassName;
      if(darkMode){
        this.overlay.getContainerElement().classList.add(this.darkClassName);

      }else{
        this.overlay.getContainerElement().classList.remove(this.darkClassName);
      }

    }
    
  )





}

toggleControl = new FormControl(false);
@HostBinding('class')  className = '';
darkClassName = 'theme-dark';
lightClassName = 'theme-light';
pincode(){
 
}

  // Example login method
  login() {
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');  // Update login state in local storage
    this.router.navigate(['/home']);  // Redirect to home page after login
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);  // Redirect to login page after logout
  }

}
