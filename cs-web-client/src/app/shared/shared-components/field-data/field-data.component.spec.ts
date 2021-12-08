import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDataComponent } from './field-data.component';

describe('FieldDataComponent', () => {
  let component: FieldDataComponent;
  let fixture: ComponentFixture<FieldDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
