/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game13Component } from './game.component';

describe('GameComponent', () => {
  let component: Game13Component;
  let fixture: ComponentFixture<Game13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game13Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
