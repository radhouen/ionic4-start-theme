import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssencePage } from './essence.page';

describe('EssencePage', () => {
  let component: EssencePage;
  let fixture: ComponentFixture<EssencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
