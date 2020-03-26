import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { By } from '@angular/platform-browser';

describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShoppingListComponent,
        MockComponent(ShoppingEditComponent)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    const shoppingList = fixture.debugElement.nativeElement;
    expect(shoppingList).toMatchSnapshot();
  });

  it('should render a `ShoppingEditComponent`', () => {
    const shoppingEdit = fixture.debugElement.queryAll(By.directive(ShoppingEditComponent));
    expect(shoppingEdit).toHaveLength(1);
  });
});
