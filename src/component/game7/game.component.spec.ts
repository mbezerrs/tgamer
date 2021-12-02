/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game7Component } from './game.component';

describe('GameComponent', () => {
  let component: Game7Component;
  let fixture: ComponentFixture<Game7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game7Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
