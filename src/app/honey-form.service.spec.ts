import { TestBed } from '@angular/core/testing';

import { HoneyFormService } from './honey-form.service';

describe('HoneyFormService', () => {
  let service: HoneyFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoneyFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
