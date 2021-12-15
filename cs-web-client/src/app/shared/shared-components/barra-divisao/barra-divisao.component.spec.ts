import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDivisaoComponent } from './barra-divisao.component';

describe('BarraDivisaoComponent', () => {
  let component: BarraDivisaoComponent;
  let fixture: ComponentFixture<BarraDivisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDivisaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDivisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
