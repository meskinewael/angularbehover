import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiqueDataTableComponent } from './dynamique-data-table.component';

describe('DynamiqueDataTableComponent', () => {
  let component: DynamiqueDataTableComponent;
  let fixture: ComponentFixture<DynamiqueDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiqueDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiqueDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
