import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnLoginComponent } from './vuln-login.component';

describe('VulnLoginComponent', () => {
  let component: VulnLoginComponent;
  let fixture: ComponentFixture<VulnLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VulnLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VulnLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
