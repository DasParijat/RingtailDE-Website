import { Component } from '@angular/core';
import { HeaderComponent } from '../component/header/header.component';
import { ThumbnailComponent } from '../section/sub-section/thumbnail/thumbnail.component';
import { ScreenshotComponent } from '../section/main-section/screenshot/screenshot.component';
import { SummaryComponent } from '../section/sub-section/summary/summary.component';
import { HomeSecComponent } from '../section/main-section/home-sec/home-sec.component';
import { LoreComponent } from '../section/main-section/lore/lore.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HomeSecComponent, ScreenshotComponent, LoreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
