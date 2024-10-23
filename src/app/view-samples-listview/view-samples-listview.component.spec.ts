import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSamplesListviewComponent } from './view-samples-listview.component';

describe('ViewSamplesListviewComponent', () => {
  let component: ViewSamplesListviewComponent;
  let fixture: ComponentFixture<ViewSamplesListviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSamplesListviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSamplesListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
