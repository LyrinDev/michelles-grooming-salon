import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsEditComponent } from './breeds-edit.component';

describe('BreedsEditComponent', () => {
  let component: BreedsEditComponent;
  let fixture: ComponentFixture<BreedsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
