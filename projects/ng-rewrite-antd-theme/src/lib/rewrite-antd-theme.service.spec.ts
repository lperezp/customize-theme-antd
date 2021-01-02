import { TestBed } from '@angular/core/testing';

import { RewriteAntdThemeService } from './rewrite-antd-theme.service';

describe('NgRewriteAntdThemeService', () => {
  let service: RewriteAntdThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RewriteAntdThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
