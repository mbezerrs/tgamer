/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game19Component } from './game.component';

describe('GameComponent', () => {
  let component: Game19Component;
  let fixture: ComponentFixture<Game19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game19Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
