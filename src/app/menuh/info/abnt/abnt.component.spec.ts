/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AbntComponent } from './abnt.component';

describe('AbntComponent', () => {
  let component: AbntComponent;
  let fixture: ComponentFixture<AbntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
