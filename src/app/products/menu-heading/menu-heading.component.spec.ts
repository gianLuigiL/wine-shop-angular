import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHeadingComponent } from './menu-heading.component';

describe('MenuHeadingComponent', () => {
  let component: MenuHeadingComponent;
  let fixture: ComponentFixture<MenuHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
