import { TestBed } from '@angular/core/testing';

import { AddBooService } from './add-boo.service';

describe('AddBooService', () => {
  let service: AddBooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddBooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
