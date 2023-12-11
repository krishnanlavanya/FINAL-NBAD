import { Component } from '@angular/core';
import { AuthService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final_app';
  authenticated=false;
 constructor(private authService : AuthService ){}
token:any;
  ngOnInit(): void {
    this.token=localStorage.getItem('jwt')
    console.log(this.isTokenExpired(this.token))
    }

    private isTokenExpired(token: string) {
      const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
      return expiry ;
    }
  }

