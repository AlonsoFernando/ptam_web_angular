/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MethodologyComponent } from './methodology.component';

describe('MethodologyComponent', () => {
  let component: MethodologyComponent;
  let fixture: ComponentFixture<MethodologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
