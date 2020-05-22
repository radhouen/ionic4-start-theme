import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloporteursPage } from './caloporteurs.page';

describe('CaloporteursPage', () => {
  let component: CaloporteursPage;
  let fixture: ComponentFixture<CaloporteursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloporteursPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloporteursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
