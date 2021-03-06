/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game5Component } from './game.component';

describe('GameComponent', () => {
  let component: Game5Component;
  let fixture: ComponentFixture<Game5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
