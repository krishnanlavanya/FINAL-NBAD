import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-gaurd/auth-guard.service';
import { AuthService } from '../authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public constructor(private router:Router,private authService:AuthService){}
logout(){
  this.authService.isLoggedin=false;
  localStorage.clear();
  this.router.navigate(["/login"])
}
}
