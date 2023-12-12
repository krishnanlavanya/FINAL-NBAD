import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtestingComponent } from './utesting.component';

describe('UtestingComponent', () => {
  let component: UtestingComponent;
  let fixture: ComponentFixture<UtestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtestingComponent]
    });
    fixture = TestBed.createComponent(UtestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
