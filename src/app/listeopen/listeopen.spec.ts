import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listeopen } from './listeopen';

describe('Listeopen', () => {
  let component: Listeopen;
  let fixture: ComponentFixture<Listeopen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listeopen],
    }).compileComponents();

    fixture = TestBed.createComponent(Listeopen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
