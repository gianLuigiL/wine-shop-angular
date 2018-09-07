import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSubHeadingComponent } from './menu-sub-heading.component';

describe('MenuSubHeadingComponent', () => {
  let component: MenuSubHeadingComponent;
  let fixture: ComponentFixture<MenuSubHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSubHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSubHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
