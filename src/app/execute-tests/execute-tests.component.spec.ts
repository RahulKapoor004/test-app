import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteTestsComponent } from './execute-tests.component';

describe('ExecuteTestsComponent', () => {
  let component: ExecuteTestsComponent;
  let fixture: ComponentFixture<ExecuteTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecuteTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
