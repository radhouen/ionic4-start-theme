import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselPage } from './diesel.page';

describe('DieselPage', () => {
  let component: DieselPage;
  let fixture: ComponentFixture<DieselPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieselPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieselPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
