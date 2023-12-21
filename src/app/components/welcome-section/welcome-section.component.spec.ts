import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSectionComponent } from './welcome-section.component';

describe('WelcomeSectionComponent', () => {
  let component: WelcomeSectionComponent;
  let fixture: ComponentFixture<WelcomeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
