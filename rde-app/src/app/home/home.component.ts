import { Component } from '@angular/core';
import { HeaderComponent } from '../component/header/header.component';
import { ThumbnailComponent } from '../section/thumbnail/thumbnail.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ThumbnailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
