import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFormDialogComponent } from './article-form-dialog.component';

describe('ArticleFormDialogComponent', () => {
  let component: ArticleFormDialogComponent;
  let fixture: ComponentFixture<ArticleFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
