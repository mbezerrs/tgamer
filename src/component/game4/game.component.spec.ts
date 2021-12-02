/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game4Component } from './game.component';

describe('GameComponent', () => {
  let component: Game4Component;
  let fixture: ComponentFixture<Game4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game4Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
