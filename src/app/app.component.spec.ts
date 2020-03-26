import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { By } from '@angular/platform-browser';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        RecipesComponent,
        ShoppingListComponent,
      ],
      providers: [
        HeaderComponent,
        RecipesComponent,
        ShoppingListComponent,
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'recipes-jest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('recipes-jest');
  });

  it('should match snapshot', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.nativeElement;
    expect(app).toMatchSnapshot();
  })

  describe('App should render its child components', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          HeaderComponent,
          RecipesComponent,
        ],
        providers: [
          HeaderComponent,
        ]
      }).compileComponents();
    }));
    it('should render the `Header` component', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement;
      fixture.detectChanges();
      const header = app.query(By.directive(HeaderComponent));
      expect(header.componentInstance).toBeInstanceOf(HeaderComponent);
    });
    it('should render the `Recipes` component', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement;
      fixture.detectChanges();
      const recipes = app.query(By.directive(RecipesComponent));
      expect(recipes.componentInstance).toBeInstanceOf(RecipesComponent);
    });
    it('should render the `ShoppingLIst` component', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement;
      fixture.detectChanges();
      const recipes = app.query(By.directive(ShoppingListComponent));
      expect(recipes.componentInstance).toBeInstanceOf(ShoppingListComponent);
    });
  });

});
