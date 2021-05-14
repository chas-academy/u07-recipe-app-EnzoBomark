import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRecipeItemComponent } from './random-recipe-item.component';

describe('RandomRecipeItemComponent', () => {
  let component: RandomRecipeItemComponent;
  let fixture: ComponentFixture<RandomRecipeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomRecipeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomRecipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
