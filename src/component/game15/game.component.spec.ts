/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game15Component } from './game.component';

describe('GameComponent', () => {
  let component: Game15Component;
  let fixture: ComponentFixture<Game15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game15Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
