import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductThumbnailComponent } from './show-product-thumbnail.component';

describe('ShowProductThumbnailComponent', () => {
  let component: ShowProductThumbnailComponent;
  let fixture: ComponentFixture<ShowProductThumbnailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowProductThumbnailComponent]
    });
    fixture = TestBed.createComponent(ShowProductThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
