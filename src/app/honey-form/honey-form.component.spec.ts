import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HoneyFormComponent } from './honey-form.component';

describe('HoneyFormComponent', () => {
  let component: HoneyFormComponent;
  let fixture: ComponentFixture<HoneyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoneyFormComponent ],
      providers: [ provideHttpClient() ]
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
