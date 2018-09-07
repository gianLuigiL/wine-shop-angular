import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffordancesComponent } from './affordances.component';

describe('AffordancesComponent', () => {
  let component: AffordancesComponent;
  let fixture: ComponentFixture<AffordancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffordancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffordancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
