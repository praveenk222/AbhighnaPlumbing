import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  nav:any=[];
  private breakpointObserver = inject(BreakpointObserver);
  showHead:boolean=false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    constructor(private router:Router,private auths:AuthService){
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
       
          if (event['url'] == '/' ||  event['url'] == '/login') {
            this.showHead = false;
          } else {
            // console.log("NU")
            this.showHead = true;
          }
        }
        
      });
      


     console.log(this.nav=this.auths.getCurrentUser())
    }
    ngOnchange(){
      this.nav=this.auths.getCurrentUser();
    }
    logout() {
      localStorage.removeItem('isLoggedIn');
    localStorage.clear();
      this.router.navigate(['/']);  // Redirect to login page after logout
    }
}
