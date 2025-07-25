import { Component } from '@angular/core';

@Component({
  selector: 'app-game-widget',
  imports: [],
  templateUrl: './game-widget.component.html',
  styleUrl: './game-widget.component.css'
})
export class GameWidgetComponent {
  is_playable : boolean = false;

  enable_is_playable(): void {
    this.is_playable = true;
  }
}
