/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game9Component } from './game.component';

describe('GameComponent', () => {
  let component: Game9Component;
  let fixture: ComponentFixture<Game9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game9Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
