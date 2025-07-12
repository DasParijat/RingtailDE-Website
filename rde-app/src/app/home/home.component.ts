import { Component } from '@angular/core';
import { HeaderComponent } from '../component/header/header.component';
import { ThumbnailComponent } from '../section/thumbnail/thumbnail.component';
import { ScreenshotComponent } from '../section/screenshot/screenshot.component';
import { SummaryComponent } from '../section/summary/summary.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ThumbnailComponent, ScreenshotComponent, SummaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
