import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaharashrtaComponent } from './maharashrta.component';

describe('MaharashrtaComponent', () => {
  let component: MaharashrtaComponent;
  let fixture: ComponentFixture<MaharashrtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaharashrtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaharashrtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
