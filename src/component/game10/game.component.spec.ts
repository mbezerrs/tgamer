/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game10Component } from './game.component';

describe('GameComponent', () => {
  let component: Game10Component;
  let fixture: ComponentFixture<Game10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game10Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
