// import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // viewportScroller : ViewportScroller = inject(ViewportScroller);
  
  scrollToElement(elementID : string): void {
    const yOffset = 70; 
    const element = document.getElementById(elementID);
    
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: y });
    }
  }
}
