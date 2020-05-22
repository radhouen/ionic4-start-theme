import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdataPage } from './viewdata.page';

describe('ViewdataPage', () => {
  let component: ViewdataPage;
  let fixture: ComponentFixture<ViewdataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
