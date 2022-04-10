import { TestBed } from '@angular/core/testing';

import { ResponseHandelInterceptor } from './response-handel.interceptor';

describe('ResponseHandelInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ResponseHandelInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ResponseHandelInterceptor = TestBed.inject(ResponseHandelInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
