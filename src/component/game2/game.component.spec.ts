/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game2Component } from './game.component';

describe('GameComponent', () => {
  let component: Game2Component;
  let fixture: ComponentFixture<Game2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game2Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
