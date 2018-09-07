import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDropdownItemComponent } from './cart-dropdown-item.component';

describe('CartDropdownItemComponent', () => {
  let component: CartDropdownItemComponent;
  let fixture: ComponentFixture<CartDropdownItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDropdownItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
