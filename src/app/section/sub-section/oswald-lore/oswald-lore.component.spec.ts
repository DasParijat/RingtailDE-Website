import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OswaldLoreComponent } from './oswald-lore.component';

describe('OswaldLoreComponent', () => {
  let component: OswaldLoreComponent;
  let fixture: ComponentFixture<OswaldLoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OswaldLoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OswaldLoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
