import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrilogyLoreComponent } from './trilogy-lore.component';

describe('TrilogyLoreComponent', () => {
  let component: TrilogyLoreComponent;
  let fixture: ComponentFixture<TrilogyLoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrilogyLoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrilogyLoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
