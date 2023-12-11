import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-token-expired-popup-component',
  templateUrl: './token-expired-popup-component.component.html',
  styleUrls: ['./token-expired-popup-component.component.css']
})
export class TokenExpiredPopupComponentComponent {

  display: boolean = false;

  constructor() {}

  closeDialog(): void {
    this.display=false;
  }
}
