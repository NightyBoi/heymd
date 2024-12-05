import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineConsultationMobileComponent } from './online-consultation-mobile.component';

describe('OnlineConsultationMobileComponent', () => {
  let component: OnlineConsultationMobileComponent;
  let fixture: ComponentFixture<OnlineConsultationMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineConsultationMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineConsultationMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
