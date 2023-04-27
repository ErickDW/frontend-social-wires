import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemNotAvailableComponent } from './system-not-available.component';

describe('SystemNotAvailableComponent', () => {
  let component: SystemNotAvailableComponent;
  let fixture: ComponentFixture<SystemNotAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemNotAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemNotAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
