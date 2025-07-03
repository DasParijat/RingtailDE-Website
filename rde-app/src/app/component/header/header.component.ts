import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  viewportScroller : ViewportScroller = inject(ViewportScroller);
  
  scrollToElement(elementID : string): void {
    this.viewportScroller.scrollToAnchor(elementID);
  }
}
