import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldUsernameComponent } from './field-username.component';

describe('FieldUsernameComponent', () => {
  let component: FieldUsernameComponent;
  let fixture: ComponentFixture<FieldUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldUsernameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
