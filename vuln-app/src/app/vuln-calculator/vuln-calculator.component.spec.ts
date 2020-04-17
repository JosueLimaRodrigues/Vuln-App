import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnCalculatorComponent } from './vuln-calculator.component';

describe('VulnCalculatorComponent', () => {
  let component: VulnCalculatorComponent;
  let fixture: ComponentFixture<VulnCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VulnCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VulnCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
