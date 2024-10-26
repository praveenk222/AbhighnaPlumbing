import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { SweetAlertServiceService } from '../services/sweet-alert-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  @Output() loginEvent = new EventEmitter<void>();
  constructor(private fb: FormBuilder,private router:Router,private users:UsersService,
    private spinner:NgxSpinnerService,private auths:AuthService,
    private salert:SweetAlertServiceService
  ) {
    this.loginForm = this.fb.group({
      UserName: ['admin', ],
      Password: ['admin', [Validators.required]]
    });
  }

  login() {
    // Perform login logic
    this.loginEvent.emit(); 
    this.onSubmit(); // Notify parent component of login
  }
  onSubmit() {debugger
this.spinner.show();
    if (this.loginForm.valid) {
      // Handle login logic here
      this.users.loginAdmin(this.loginForm.value).subscribe(
        res=>{
          console.log(res)
          if(res){
            localStorage.setItem('isLoggedIn', 'true');
            this.salert.showSuccess('Login done','')
            this.auths.login(res.Permissions);
            
            console.log(res.Permissions);
            this.router.navigate(['/dashboard'])
          }
        }
      )
    }
  }
}
