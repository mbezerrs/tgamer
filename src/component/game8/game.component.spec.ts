/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game8Component } from './game.component';

describe('GameComponent', () => {
  let component: Game8Component;
  let fixture: ComponentFixture<Game8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game8Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
