import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapoAzulComponent } from './sapo-azul.component';

describe('SapoAzulComponent', () => {
  let component: SapoAzulComponent;
  let fixture: ComponentFixture<SapoAzulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapoAzulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SapoAzulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
