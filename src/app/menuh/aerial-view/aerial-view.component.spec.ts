/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AerialViewComponent } from './aerial-view.component';

describe('AerialViewComponent', () => {
  let component: AerialViewComponent;
  let fixture: ComponentFixture<AerialViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerialViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AerialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
