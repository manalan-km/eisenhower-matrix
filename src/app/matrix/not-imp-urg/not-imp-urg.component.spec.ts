import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotImpUrgComponent } from './not-imp-urg.component';

describe('NotImpUrgComponent', () => {
  let component: NotImpUrgComponent;
  let fixture: ComponentFixture<NotImpUrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotImpUrgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotImpUrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
