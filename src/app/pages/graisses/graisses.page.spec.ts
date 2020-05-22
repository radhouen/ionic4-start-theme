import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraissesPage } from './graisses.page';

describe('GraissesPage', () => {
  let component: GraissesPage;
  let fixture: ComponentFixture<GraissesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraissesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraissesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
