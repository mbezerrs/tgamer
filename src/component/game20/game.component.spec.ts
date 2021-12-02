/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game20Component } from './game.component';

describe('GameComponent', () => {
  let component: Game20Component;
  let fixture: ComponentFixture<Game20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game20Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
