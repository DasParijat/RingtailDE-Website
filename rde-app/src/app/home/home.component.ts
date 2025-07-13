import { Component } from '@angular/core';
import { HeaderComponent } from '../component/header/header.component';
import { ThumbnailComponent } from '../section/thumbnail/thumbnail.component';
import { ScreenshotComponent } from '../section/screenshot/screenshot.component';
import { SummaryComponent } from '../section/summary/summary.component';
import { HomeSecComponent } from '../section/home-sec/home-sec.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HomeSecComponent, ScreenshotComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
