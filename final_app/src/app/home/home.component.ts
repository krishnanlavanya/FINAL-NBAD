import { Component } from '@angular/core';
import { AuthService } from '../authentication/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public constructor(AuthService:AuthService){}

}
