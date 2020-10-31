import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureTimersPageComponent } from './configure-timers-page.component';

describe('ConfigureTimersPageComponent', () => {
  let component: ConfigureTimersPageComponent;
  let fixture: ComponentFixture<ConfigureTimersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureTimersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureTimersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
