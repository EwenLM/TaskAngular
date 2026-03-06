import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listedone } from './listedone';

describe('Listedone', () => {
  let component: Listedone;
  let fixture: ComponentFixture<Listedone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listedone],
    }).compileComponents();

    fixture = TestBed.createComponent(Listedone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
