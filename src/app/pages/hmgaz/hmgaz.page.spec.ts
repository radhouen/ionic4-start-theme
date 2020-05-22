import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmgazPage } from './hmgaz.page';

describe('HmgazPage', () => {
  let component: HmgazPage;
  let fixture: ComponentFixture<HmgazPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmgazPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmgazPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
