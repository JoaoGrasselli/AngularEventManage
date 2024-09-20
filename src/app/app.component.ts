import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EventListScreenComponent } from './event-list-screen/event-list-screen.component';
import { EventCreationComponent } from './event-creation/event-creation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, EventListScreenComponent, EventCreationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'evento-app';
}
