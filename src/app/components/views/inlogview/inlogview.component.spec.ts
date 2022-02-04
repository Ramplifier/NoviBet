import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlogviewComponent } from './inlogview.component';

describe('InlogviewComponent', () => {
  let component: InlogviewComponent;
  let fixture: ComponentFixture<InlogviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlogviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlogviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
