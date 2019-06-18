import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramCarouselComponent } from './instagram-carousel.component';

describe('InstagramCarouselComponent', () => {
  let component: InstagramCarouselComponent;
  let fixture: ComponentFixture<InstagramCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
