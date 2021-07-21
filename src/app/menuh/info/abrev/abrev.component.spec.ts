/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AbrevComponent } from './abrev.component';

describe('AbrevComponent', () => {
  let component: AbrevComponent;
  let fixture: ComponentFixture<AbrevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbrevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
