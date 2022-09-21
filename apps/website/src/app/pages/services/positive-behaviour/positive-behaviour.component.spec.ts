import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveBehaviourComponent } from './positive-behaviour.component';

describe('PositiveBehaviourComponent', () => {
  let component: PositiveBehaviourComponent;
  let fixture: ComponentFixture<PositiveBehaviourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositiveBehaviourComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PositiveBehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
