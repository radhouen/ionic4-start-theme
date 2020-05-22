import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrauliquesPage } from './hydrauliques.page';

describe('HydrauliquesPage', () => {
  let component: HydrauliquesPage;
  let fixture: ComponentFixture<HydrauliquesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HydrauliquesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HydrauliquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
