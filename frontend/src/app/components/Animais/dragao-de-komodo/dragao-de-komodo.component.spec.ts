import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragaoDeKomodoComponent } from './dragao-de-komodo.component';

describe('DragaoDeKomodoComponent', () => {
  let component: DragaoDeKomodoComponent;
  let fixture: ComponentFixture<DragaoDeKomodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragaoDeKomodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragaoDeKomodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
