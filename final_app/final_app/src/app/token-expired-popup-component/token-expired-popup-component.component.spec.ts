import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenExpiredPopupComponentComponent } from './token-expired-popup-component.component';

describe('TokenExpiredPopupComponentComponent', () => {
  let component: TokenExpiredPopupComponentComponent;
  let fixture: ComponentFixture<TokenExpiredPopupComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenExpiredPopupComponentComponent]
    });
    fixture = TestBed.createComponent(TokenExpiredPopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
