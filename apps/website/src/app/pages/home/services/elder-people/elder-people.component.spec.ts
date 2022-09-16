import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderPeopleComponent } from './elder-people.component';

describe('ElderPeopleComponent', () => {
  let component: ElderPeopleComponent;
  let fixture: ComponentFixture<ElderPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElderPeopleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElderPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
