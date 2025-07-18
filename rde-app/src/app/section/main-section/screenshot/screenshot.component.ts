import { Component, inject } from '@angular/core';
import { ScreenshotDescComponent } from '../../../component/screenshot-desc/screenshot-desc.component';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';

export interface DataItem {
  image: string;
  description: string;
}

@Component({
  selector: 'app-screenshot',
  imports: [ScreenshotDescComponent],
  templateUrl: './screenshot.component.html',
  styleUrl: './screenshot.component.css'
})
export class ScreenshotComponent {
  private http = inject(HttpClient);
  public items : DataItem[] = [];

  ngOnInit() {
    this.http.get<DataItem[]>('json/screenshots.json').subscribe(data => {
      this.items = data;
    });
  }
}
