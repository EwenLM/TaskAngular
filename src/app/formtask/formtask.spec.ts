import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formtask } from './formtask';

describe('Formtask', () => {
  let component: Formtask;
  let fixture: ComponentFixture<Formtask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formtask],
    }).compileComponents();

    fixture = TestBed.createComponent(Formtask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
