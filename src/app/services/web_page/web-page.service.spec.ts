import { TestBed } from '@angular/core/testing';

import { WebPageService } from './web-page.service';

describe('WebPageService', () => {
  let service: WebPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
