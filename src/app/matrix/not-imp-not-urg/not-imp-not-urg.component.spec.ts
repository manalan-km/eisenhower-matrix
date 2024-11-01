import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotImpNotUrgComponent } from './not-imp-not-urg.component';

describe('NotImpNotUrgComponent', () => {
  let component: NotImpNotUrgComponent;
  let fixture: ComponentFixture<NotImpNotUrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotImpNotUrgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotImpNotUrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
