import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexSearchItemComponent } from './complex-search-item.component';

describe('ComplexSearchItemComponent', () => {
  let component: ComplexSearchItemComponent;
  let fixture: ComponentFixture<ComplexSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexSearchItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
