/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game3Component } from './game.component';

describe('GameComponent', () => {
  let component: Game3Component;
  let fixture: ComponentFixture<Game3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game3Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
