import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesListComponent } from './recipes-list.component';
import { By } from '@angular/platform-browser';
import { ShoppingListComponent } from 'src/app/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';

describe('RecipesListComponent', () => {
  let component: RecipesListComponent;
  let fixture: ComponentFixture<RecipesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesListComponent ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    const recipesList = fixture.debugElement.nativeElement;
    expect(recipesList).toMatchSnapshot();
  });
});
