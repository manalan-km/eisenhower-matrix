import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpUrgComponent } from './imp-urg.component';

describe('ImpUrgComponent', () => {
  let component: ImpUrgComponent;
  let fixture: ComponentFixture<ImpUrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpUrgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImpUrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
