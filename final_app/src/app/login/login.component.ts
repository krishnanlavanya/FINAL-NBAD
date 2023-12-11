import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstant } from 'src/app/app.constants';
import { AuthService } from '../authentication/authentication.service';
import { TokenService } from '../services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public loginForm: FormGroup;
  public submitted = false;

  constructor( private formBuilder: FormBuilder, private router: Router,    private http: HttpClient,    private authService : AuthService,private tokenService:TokenService

    ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
          )
        ]
      ]
    });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  onLogin(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      let user=this.loginForm.getRawValue()
      this.http.post(`${AppConstant.API_URL}/login`,user,{withCredentials:true})
      .subscribe(
        (user:any)=>{

          console.log(user);
          localStorage.setItem("jwt",user.token);
          this.tokenService.setToken(user.token);
          localStorage.setItem("user",user.user);
          this.authService.isLoggedin=true;
          this.router.navigate(['/'])


        },(error)=>{
          console.log(error)
          alert("Error")
        } )
    }
  }
}
