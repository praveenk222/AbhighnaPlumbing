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
  isLogin:boolean=false;
  title = 'EverAdminPanel';
  private sidenav: MatSidenav;
code:number;
  public isMenuOpen = true;
  loginForm: FormGroup;
  navitems: any;
  private breakpointObserver = inject(BreakpointObserver);
  showHead:boolean=false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
constructor(private overlay:OverlayContainer,
  private fb: FormBuilder,private router:Router,private users:UsersService,
  private spinner:NgxSpinnerService,private auths:AuthService,
  private salert:SweetAlertServiceService){
  this.isMenuOpen = false;
  this.loginForm = this.fb.group({
    UserName: ['admin', ],
    Password: ['admin', [Validators.required]]
  });
  console.log('login user',this.auths.getCurrentUser())
 if(this.auths.getCurrentUser().length > 0){

   this.isLogin=!this.isLogin;
   alert();
 }
}
  get isHandset(): boolean {
    return this.breakpointObserver.isMatched(Breakpoints.Handset);
  }
  ngDoCheck() {
    if (this.isHandset) {
      this.isMenuOpen = false;
    } else {
      this.isMenuOpen = true;
    }      
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
onSubmit() {
  this.spinner.show();
      if (this.loginForm.valid) {
        // Handle login logic here
        this.users.loginAdmin(this.loginForm.value).subscribe(
          res=>{
            console.log(res)
            if(res){
              this.salert.showSuccess('Login done','')
              this.auths.login(res.Permissions);
              this.isLogin=!this.isLogin;
              console.log(res.Permissions);
              this.navitems=res.Permissions;
              this.router.navigate(['/dashboard'])
            }
          }
        )
      }
    }
toggleControl = new FormControl(false);
@HostBinding('class')  className = '';
darkClassName = 'theme-dark';
lightClassName = 'theme-light';
pincode(){
 
}
// handle(event:any){console.log(this.code.toString().length)
//   if(this.code.toString().length == 6){
//   this.http.get(`https://api.postalpincode.in/pincode/${this.code}`).subscribe((res:any)=>{
//     console.log(res)
//   })
// }
// }



}
