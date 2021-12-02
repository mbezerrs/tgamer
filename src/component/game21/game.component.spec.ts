/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game21Component } from './game.component';

describe('GameComponent', () => {
  let component: Game21Component;
  let fixture: ComponentFixture<Game21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game21Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
