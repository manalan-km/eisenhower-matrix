import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpNotUrgComponent } from './imp-not-urg.component';

describe('ImpNotUrgComponent', () => {
  let component: ImpNotUrgComponent;
  let fixture: ComponentFixture<ImpNotUrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpNotUrgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpNotUrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
