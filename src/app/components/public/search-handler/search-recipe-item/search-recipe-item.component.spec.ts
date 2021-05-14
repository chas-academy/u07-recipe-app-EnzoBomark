import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRecipeItemComponent } from './search-recipe-item.component';

describe('SearchRecipeItemComponent', () => {
  let component: SearchRecipeItemComponent;
  let fixture: ComponentFixture<SearchRecipeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRecipeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRecipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
