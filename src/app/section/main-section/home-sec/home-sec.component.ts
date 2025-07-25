import { Component } from '@angular/core';
import { ThumbnailComponent } from '../../sub-section/thumbnail/thumbnail.component';
import { AccessComponent } from '../../sub-section/access/access.component';
import { SummaryComponent } from '../../sub-section/summary/summary.component';

@Component({
  selector: 'app-home-sec',
  imports: [ThumbnailComponent, AccessComponent, SummaryComponent],
  templateUrl: './home-sec.component.html',
  styleUrl: './home-sec.component.css'
})
export class HomeSecComponent {

}
