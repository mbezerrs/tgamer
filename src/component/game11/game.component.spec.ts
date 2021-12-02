/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game11Component } from './game.component';

describe('GameComponent', () => {
  let component: Game11Component;
  let fixture: ComponentFixture<Game11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game11Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
