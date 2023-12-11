// token.service.ts
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DialogService } from 'primeng/dynamicdialog';
import { TokenExpiredPopupComponentComponent } from '../token-expired-popup-component/token-expired-popup-component.component';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private dialogService: DialogService) {}

  showTokenExpiredPopup(): void {
    const ref = this.dialogService.open(TokenExpiredPopupComponentComponent, {
      header: 'Token Expired',
      width: '300px',
      closable: false,
      modal: true,
    });

    ref.onClose.subscribe(() => {
      // Handle any logic you need after the dialog is closed
      // For example, navigate to the login page
    });
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  isTokenExpired(token: string): boolean {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);

    if (decodedToken && decodedToken.exp) {
      const currentTimestamp = new Date().getTime() / 1000;
      return decodedToken.exp < currentTimestamp;
    }

    return true;
  }


}
