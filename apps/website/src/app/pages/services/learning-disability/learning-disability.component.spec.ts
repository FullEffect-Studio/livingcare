import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningDisabilityComponent } from './learning-disability.component';

describe('LearningDisabilityComponent', () => {
  let component: LearningDisabilityComponent;
  let fixture: ComponentFixture<LearningDisabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearningDisabilityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LearningDisabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
