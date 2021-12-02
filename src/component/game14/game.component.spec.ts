/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game14Component } from './game.component';

describe('GameComponent', () => {
  let component: Game14Component;
  let fixture: ComponentFixture<Game14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game14Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
