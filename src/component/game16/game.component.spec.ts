/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game16Component } from './game.component';

describe('GameComponent', () => {
  let component: Game16Component;
  let fixture: ComponentFixture<Game16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game16Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
