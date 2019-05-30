import { TestBed } from '@angular/core/testing';

import { GminyService } from './gminy.service';

describe('GminyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GminyService = TestBed.get(GminyService);
    expect(service).toBeTruthy();
  });
});
