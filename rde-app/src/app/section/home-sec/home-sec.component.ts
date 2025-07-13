import { Component } from '@angular/core';
import { ThumbnailComponent } from '../thumbnail/thumbnail.component';
import { AccessComponent } from '../access/access.component';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-home-sec',
  imports: [ThumbnailComponent, AccessComponent, SummaryComponent],
  templateUrl: './home-sec.component.html',
  styleUrl: './home-sec.component.css'
})
export class HomeSecComponent {

}
