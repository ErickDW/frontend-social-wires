import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMesaggesComponent } from './my-mesagges.component';

describe('MyMesaggesComponent', () => {
  let component: MyMesaggesComponent;
  let fixture: ComponentFixture<MyMesaggesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMesaggesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMesaggesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
