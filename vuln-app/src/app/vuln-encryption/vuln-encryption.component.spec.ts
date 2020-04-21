import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnEncryptionComponent } from './vuln-encryption.component';

describe('VulnEncryptionComponent', () => {
  let component: VulnEncryptionComponent;
  let fixture: ComponentFixture<VulnEncryptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VulnEncryptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VulnEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
