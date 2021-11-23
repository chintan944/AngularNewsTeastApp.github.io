import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusbusinessComponent } from './busbusiness.component';

describe('BusbusinessComponent', () => {
  let component: BusbusinessComponent;
  let fixture: ComponentFixture<BusbusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusbusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
