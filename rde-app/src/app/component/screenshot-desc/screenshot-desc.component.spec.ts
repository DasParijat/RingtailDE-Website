import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotDescComponent } from './screenshot-desc.component';

describe('ScreenshotDescComponent', () => {
  let component: ScreenshotDescComponent;
  let fixture: ComponentFixture<ScreenshotDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenshotDescComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenshotDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
