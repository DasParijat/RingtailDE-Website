import { Component } from '@angular/core';
import { RingtailLoreComponent } from '../../sub-section/ringtail-lore/ringtail-lore.component';
import { OswaldLoreComponent } from '../../sub-section/oswald-lore/oswald-lore.component';
import { TrilogyLoreComponent } from '../../sub-section/trilogy-lore/trilogy-lore.component';

@Component({
  selector: 'app-lore',
  imports: [RingtailLoreComponent, OswaldLoreComponent, TrilogyLoreComponent],
  templateUrl: './lore.component.html',
  styleUrl: './lore.component.css'
})
export class LoreComponent {

}
