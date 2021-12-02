/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game6Component } from './game.component';

describe('GameComponent', () => {
  let component: Game6Component;
  let fixture: ComponentFixture<Game6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
