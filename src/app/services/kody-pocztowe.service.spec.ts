import { TestBed } from '@angular/core/testing';

import { KodyPocztoweService } from './kody-pocztowe.service';

describe('KodyPocztoweService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KodyPocztoweService = TestBed.get(KodyPocztoweService);
    expect(service).toBeTruthy();
  });
});
