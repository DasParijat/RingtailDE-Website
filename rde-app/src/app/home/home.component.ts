import { Component } from '@angular/core';
import { HeaderComponent } from '../component/header/header.component';
import { ScreenshotComponent } from '../section/main-section/screenshot/screenshot.component';
import { HomeSecComponent } from '../section/main-section/home-sec/home-sec.component';
import { LoreComponent } from '../section/main-section/lore/lore.component';
import { GuideComponent } from '../section/main-section/guide/guide.component';
import { FeedbackComponent } from '../section/main-section/feedback/feedback.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HomeSecComponent, ScreenshotComponent, FeedbackComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
