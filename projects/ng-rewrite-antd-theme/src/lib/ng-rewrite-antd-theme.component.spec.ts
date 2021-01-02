import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRewriteAntdThemeComponent } from './ng-rewrite-antd-theme.component';

describe('NgRewriteAntdThemeComponent', () => {
  let component: NgRewriteAntdThemeComponent;
  let fixture: ComponentFixture<NgRewriteAntdThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgRewriteAntdThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRewriteAntdThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
