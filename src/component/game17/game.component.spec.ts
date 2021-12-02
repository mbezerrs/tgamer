/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game17Component } from './game.component';

describe('GameComponent', () => {
  let component: Game17Component;
  let fixture: ComponentFixture<Game17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game17Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
