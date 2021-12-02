/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game12Component } from './game.component';

describe('GameComponent', () => {
  let component: Game12Component;
  let fixture: ComponentFixture<Game12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game12Component ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
