import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newsportal1Component } from './newsportal1.component';

describe('Newsportal1Component', () => {
  let component: Newsportal1Component;
  let fixture: ComponentFixture<Newsportal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newsportal1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Newsportal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
