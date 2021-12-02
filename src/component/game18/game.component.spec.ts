/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game18Component } from './game.component';

describe('GameComponent', () => {
  let component: Game18Component;
  let fixture: ComponentFixture<Game18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game18Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
