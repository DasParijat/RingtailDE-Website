import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-screenshot-desc',
  imports: [],
  templateUrl: './screenshot-desc.component.html',
  styleUrl: './screenshot-desc.component.css'
})
export class ScreenshotDescComponent {
  desc = input<string>("default text")
  @Input() descImage: string = '';
}
