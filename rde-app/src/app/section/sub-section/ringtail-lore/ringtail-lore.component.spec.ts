import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingtailLoreComponent } from './ringtail-lore.component';

describe('RingtailLoreComponent', () => {
  let component: RingtailLoreComponent;
  let fixture: ComponentFixture<RingtailLoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RingtailLoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RingtailLoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
