import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyFormComponent } from './honey-form.component';

describe('HoneyFormComponent', () => {
  let component: HoneyFormComponent;
  let fixture: ComponentFixture<HoneyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoneyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoneyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
