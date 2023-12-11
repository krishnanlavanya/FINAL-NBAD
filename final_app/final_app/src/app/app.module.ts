import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './authentication/authentication.service';
import { AuthInterceptor } from './auth-interceptor/auth-interceptor.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuardService } from './auth-gaurd/auth-guard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExpensesComponent } from './expenses/expenses.component';
import { BudgetComponent } from './budget/budget.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import {ChartModule} from 'primeng/chart';
import {ToastModule} from 'primeng/toast';
import { TokenService } from './services/token.service';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { TokenExpiredPopupComponentComponent } from './token-expired-popup-component/token-expired-popup-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    ExpensesComponent,
    BudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    DialogModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    SelectButtonModule,
    ChartModule,
    ToastModule,
    ChartModule,
    DynamicDialogModule

  ],
  providers: [AuthService,AuthGuardService,    TokenService,DialogService,

    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
    ,{provide:HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
multi:true,},],
  bootstrap: [AppComponent],
  exports:[AppRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
