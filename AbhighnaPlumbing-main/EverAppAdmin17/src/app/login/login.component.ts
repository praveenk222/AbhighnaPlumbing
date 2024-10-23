import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router,private users:UsersService) {
    this.loginForm = this.fb.group({
      UserName: ['', ],
      Password: ['', [Validators.required]]
    });
  }

  onSubmit() {debugger

    if (this.loginForm.valid) {
      // Handle login logic here
      this.users.loginAdmin(this.loginForm.value).subscribe(
        res=>{
          console.log(res)
          if(res){
            alert(res[0].Message)
            this.router.navigate(['/getProduct'])
          }
        }
      )
    }
  }
}
