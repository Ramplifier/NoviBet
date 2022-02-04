import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratieviewComponent } from './registratieview.component';

describe('RegistratieviewComponent', () => {
  let component: RegistratieviewComponent;
  let fixture: ComponentFixture<RegistratieviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistratieviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratieviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
