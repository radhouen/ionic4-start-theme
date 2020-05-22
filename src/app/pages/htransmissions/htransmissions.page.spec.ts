import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtransmissionsPage } from './htransmissions.page';

describe('HtransmissionsPage', () => {
  let component: HtransmissionsPage;
  let fixture: ComponentFixture<HtransmissionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtransmissionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtransmissionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
