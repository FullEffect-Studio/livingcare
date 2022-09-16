import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringDiagnosticsComponent } from './monitoring-diagnostics.component';

describe('MonitoringDiagnosticsComponent', () => {
  let component: MonitoringDiagnosticsComponent;
  let fixture: ComponentFixture<MonitoringDiagnosticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringDiagnosticsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MonitoringDiagnosticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
