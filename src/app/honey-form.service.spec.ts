import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HoneyFormService } from './honey-form.service';

describe('HoneyFormService', () => {
  let service: HoneyFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ provideHttpClient() ]
    });
    service = TestBed.inject(HoneyFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
