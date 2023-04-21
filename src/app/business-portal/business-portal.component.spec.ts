import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPortalComponent } from './business-portal.component';

describe('BusinessPortalComponent', () => {
  let component: BusinessPortalComponent;
  let fixture: ComponentFixture<BusinessPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
