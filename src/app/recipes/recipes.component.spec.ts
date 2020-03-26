import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { By } from '@angular/platform-browser';

describe('RecipesComponent', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecipesComponent,
        RecipesListComponent,
        RecipeDetailComponent,
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    const recipes = fixture.debugElement.nativeElement;
    expect(recipes).toMatchSnapshot();
  });

  describe('renders child components',() => {
    it('should render `RecipeListComponent`', () => {
      const recipesList = fixture.debugElement.query(By.directive(RecipesListComponent));
      expect(recipesList.componentInstance).toBeInstanceOf(RecipesListComponent);
    });
    it('should render `RecipeDetailsComponent`', () => {
      const recipeDetails = fixture.debugElement.query(By.directive(RecipeDetailComponent));
      expect(recipeDetails.componentInstance).toBeInstanceOf(RecipeDetailComponent);
    });
  });
});
