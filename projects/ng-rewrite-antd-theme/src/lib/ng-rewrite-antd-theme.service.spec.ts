import { TestBed } from '@angular/core/testing';

import { NgRewriteAntdThemeService } from './ng-rewrite-antd-theme.service';

describe('NgRewriteAntdThemeService', () => {
  let service: NgRewriteAntdThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgRewriteAntdThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
